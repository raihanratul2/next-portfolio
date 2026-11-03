import Image from "next/image";
import { brandAssets } from "@/app/constants/branding";

export function BrandLogo() {
  return (
    <span aria-hidden="true" className="brand-logo inline-block shrink-0">
      <Image src={brandAssets.logo("dark")} alt="" width={64} height={45} className="brand-logo-dark" />
      <Image src={brandAssets.logo("light")} alt="" width={64} height={45} className="brand-logo-light" />
    </span>
  );
}
