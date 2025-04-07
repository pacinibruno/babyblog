import { Post } from './supabase';

export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface CategoryPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface PostPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface AdminPageProps {
  params: { id?: string };
  searchParams: { [key: string]: string | string[] | undefined };
} 