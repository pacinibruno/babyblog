import { Post } from './supabase';

export type PageProps<T = { [key: string]: string }> = {
  params: T;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export type CategoryPageProps = PageProps<{ slug: string }>;
export type PostPageProps = PageProps<{ slug: string }>;
export type AdminPageProps = PageProps<{ id?: string }>; 