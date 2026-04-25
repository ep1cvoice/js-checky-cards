import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { AuthContext } from './AuthContext';

const checkHasUserCards = async () => {
	try {
		const { count, error } = await supabase
			.from('user_cards')
			.select('*', { count: 'exact', head: true });
		if (error) return false;
		return (count ?? 0) > 0;
	} catch {
		return false;
	}
};

export const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);
	const [user, setUser] = useState(null);
	const [hasUserCards, setHasUserCards] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const init = async () => {
			console.log('[auth] init started');
			try {
				const { data: { session } } = await supabase.auth.getSession();
				console.log('[auth] getSession done, session:', !!session);
				setIsAuth(!!session);
				setUser(session?.user ?? null);
				if (session?.user) {
					const has = await checkHasUserCards();
					console.log('[auth] checkHasUserCards done:', has);
					setHasUserCards(has);
				}
			} catch (err) {
				console.error('[auth] init error:', err);
			} finally {
				console.log('[auth] setLoading(false)');
				setLoading(false);
			}
		};

		init();

		const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
			console.log('[auth] onAuthStateChange event:', _event, 'session:', !!session);
			setIsAuth(!!session);
			setUser(session?.user ?? null);
			if (session?.user) {
				setHasUserCards(await checkHasUserCards());
			} else {
				setHasUserCards(false);
			}
		});

		return () => subscription.unsubscribe();
	}, []);

	const signIn = async (email, password) => {
		const { data, error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) throw error;
		return data;
	};

	const signUp = async (email, password) => {
		const { data, error } = await supabase.auth.signUp({ email, password });
		if (error) throw error;
		return data;
	};

	const signOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) throw error;
	};

	const copyCards = async () => {
		const { error } = await supabase.rpc('copy_global_cards_for_user');
		if (error) throw error;
		setHasUserCards(true);
	};

	const deleteAllCards = async () => {
		const { error } = await supabase.from('user_cards').delete().eq('user_id', user.id);
		if (error) throw error;
		setHasUserCards(false);
	};

	const deleteAccount = async () => {
		const { error } = await supabase.rpc('delete_user_account');
		if (error) throw error;
		await supabase.auth.signOut();
	};

	if (loading) return null;

	return (
		<AuthContext.Provider value={{ isAuth, user, hasUserCards, signIn, signUp, signOut, copyCards, deleteAllCards, deleteAccount }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
