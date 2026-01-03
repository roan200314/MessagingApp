function Footer() {
return(
            <footer className="border-t border-neutral-200 bg-white px-4 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-neutral-900">ToConnect</p>
              <p className="mt-1 text-sm text-neutral-600">Modern messaging UI for your product.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
              <a className="hover:text-neutral-900" href="#demo">Demo</a>
              <a className="hover:text-neutral-900" href="#get-started">Get started</a>
              <a className="hover:text-neutral-900" href="#">Docs</a>
              <a className="hover:text-neutral-900" href="#">Privacy</a>
            </div>
          </div>
        </footer>
)
}

export default Footer