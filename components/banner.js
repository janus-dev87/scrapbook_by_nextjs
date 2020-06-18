const Banner = ({
  avatar = 'https://dl.airtable.com/.attachmentThumbnails/169b73adf87cc2d0695b220e137611ba/e6f06147',
  title = '@scrappy',
  children,
  isVisible = true
}) =>
  isVisible ? (
    <aside className="container banner">
      <img className="banner-avatar" src={avatar} width={48} />
      <div>
        <strong className="post-header-name">{title}</strong>
        <p className="post-text">{children}</p>
      </div>
      <style jsx>{`
        .banner {
          display: grid;
          grid-gap: 12px;
          grid-template-columns: 48px 1fr;
          padding: 12px;
          border-radius: 9px;
          max-width: 720px;
          background-color: var(--colors-blue);
          color: var(--colors-white);
          margin: 0 auto 24px;
        }
        .banner-avatar {
          border-radius: 6px;
        }
        .post-text :global(a) {
          color: inherit;
          font-weight: bold;
        }
      `}</style>
    </aside>
  ) : null

export default Banner
