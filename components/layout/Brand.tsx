import Image from "next/image";
import Link from "next/link";

export default function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="brand" aria-label="Kloud101 home" onClick={onClick}>
      <Image src="/kloud101logo.png" alt="Kloud101" width={128} height={40} priority />
    </Link>
  );
}
