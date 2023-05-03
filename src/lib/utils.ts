import type { Session, User } from '@supabase/supabase-js';

export const userColor = (role: string) => {
	if (role === 'admin') return 'stroke-warning';
	if (role === 'super') return 'stroke-accent';
	return '';
};

export const isAdmin = (role: string) => {
	if (['admin', 'super'].includes(role)) return true;
	else return false;
};

export const isSuper = (role: string) => {
	if (['super'].includes(role)) return true;
	else return false;
};

export const orgIdToName = (orgs: any, id: number) => {
	const result = orgs.find((e) => e.id == id);
	return result.name;
};

export const myUser = (session: Session | null) => {
	return session?.user ?? null;
};

export const myOrg = (session: Session | null) => {
	return session?.user.app_metadata.org ?? null;
};

export const myRole = (session: Session | null) => {
	return session?.user.app_metadata.role ?? 'user';
};

export const imSuper = (user: User | null | undefined) => {
	if (['super'].includes(user?.app_metadata.role)) return true;
	else return false;
};

export const imAdmin = (user: User | null | undefined) => {
	if (['super', 'admin'].includes(user.app_metadata.role)) return true;
	else return false;
};

export const roleSuper = (session: any) => {
	if (['super'].includes(session.user.app_metadata.role)) return true;
	else return false;
};

export const roleAdmin = (session: any) => {
	if (['super', 'admin'].includes(session.user.app_metadata.role)) return true;
	else return false;
};
