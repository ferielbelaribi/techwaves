export default function Section({ title, subtitle, children, className = '' }) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-tech-300 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}