export function Footer() {
  return (
    <footer className="py-8">
      <div className="container">
        <p className="text-xs text-body-0 text-center">
          &copy; {new Date().getFullYear()} Kevin Ang. All rights reserved.
          BETA.
        </p>
      </div>
    </footer>
  );
}
