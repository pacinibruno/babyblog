import { Post } from './supabase';

export interface PageProps {
  params: {
    [key: string]: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface CategoryPageProps extends PageProps {
  params: {
    slug: string;
  };
}

export interface PostPageProps extends PageProps {
  params: {
    slug: string;
  };
}

export interface AdminPageProps extends PageProps {
  params: {
    id?: string;
  };
} 