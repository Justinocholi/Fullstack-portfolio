import { ExternalLink, Heart, MessageCircle, Share2 } from 'lucide-react'

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
            <img src={post.image} alt={post.caption} className="spg-image" loading="lazy" />
          )}
          <div className="spg-content">
            <span className="spg-platform">
              {post.platform} <ExternalLink size={12} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 4 }} />
            </span>
            <p className="spg-caption">{post.caption}</p>
            <div className="spg-stats">
              {post.likes !== undefined && (
                <span><Heart size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> {post.likes.toLocaleString()}</span>
              )}
              {post.comments !== undefined && (
                <span><MessageCircle size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> {post.comments}</span>
              )}
              <span className="spg-share"><Share2 size={14} /></span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
