interface SocialPost {
  platform: 'instagram' | 'twitter' | 'linkedin'
  caption: string
  image?: string
  likes?: number
  comments?: number
  url: string
}

interface SocialPostGridProps {
  posts: SocialPost[]
}

export default function SocialPostGrid({ posts }: SocialPostGridProps) {
  return (
    <div className="spg-grid">
      {posts.map((post, idx) => (
        <a
          key={idx}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`spg-card spg-${post.platform}`}
        >
          <div className="spg-badge" />
          {post.image && (
            <img src={post.image} alt={post.caption} className="spg-image" />
          )}
          <div className="spg-content">
            <span className="spg-platform">{post.platform} <i className="fas fa-external-link-alt" style={{ fontSize: '0.6rem' }} /></span>
            <p className="spg-caption">{post.caption}</p>
            <div className="spg-stats">
              {post.likes !== undefined && (
                <span><i className="far fa-heart" /> {post.likes.toLocaleString()}</span>
              )}
              {post.comments !== undefined && (
                <span><i className="far fa-comment" /> {post.comments}</span>
              )}
              <span className="spg-share"><i className="fas fa-share-alt" /></span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
