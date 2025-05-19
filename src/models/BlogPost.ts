export interface BlogPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  views: number;
}

export interface BlogPostsResponse {
  posts: BlogPost[];
}
