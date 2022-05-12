import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Hello, my name is HyunWoo Pyo</a>
        </Link>
      </h2>
    </>
  );
}