export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-text-2" >
          © {new Date().getFullYear()} Anoushka Samanta
        </p>
        
      </div>
    </footer>
  )
}
