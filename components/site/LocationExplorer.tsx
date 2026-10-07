"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Earth, MapPin, Network, ShieldCheck } from "lucide-react";
import CtaLink from "@/components/site/CtaLink";
import { dataCenters, regions } from "@/components/site/locations";

export default function LocationExplorer({
  note = "Deploy closer to your customers. Location availability is confirmed when you order.",
}: {
  note?: string;
}) {
  const [region, setRegion] = useState<(typeof regions)[number]>("North America");
  const inRegion = dataCenters.filter((dc) => dc.region === region);
  const [code, setCode] = useState(inRegion[0].code);
  const selected = dataCenters.find((dc) => dc.code === code) ?? inRegion[0];

  const chooseRegion = (next: (typeof regions)[number]) => {
    setRegion(next);
    setCode(dataCenters.find((dc) => dc.region === next)!.code);
  };

  return (
    <div className="location-explorer">
      <div className="location-regions" aria-label="Server regions">
        {regions.map((name) => (
          <button
            key={name}
            type="button"
            className="inline-flex items-center font-medium"
            aria-pressed={region === name}
            onClick={() => chooseRegion(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="location-content">
        <div className="location-list">
          {inRegion.map((dc) => (
            <button
              key={dc.code}
              type="button"
              className="location-option items-center"
              aria-pressed={dc.code === selected.code}
              onClick={() => setCode(dc.code)}
            >
              <Image
                src={`/flags/${dc.flag}.svg`}
                alt={`${dc.country} flag`}
                width={36}
                height={24}
                className="location-flag"
              />
              <span>
                {dc.city}
                <small>{dc.country}</small>
              </span>
              <ArrowUpRight className="size-4" />
            </button>
          ))}
        </div>
        <div className="location-detail">
          <Earth className="location-globe" aria-hidden="true" />
          <span className="eyebrow">GLOBAL NETWORK / {selected.code}</span>
          <Image
            src={`/flags/${selected.flag}.svg`}
            alt={`${selected.country} flag`}
            width={60}
            height={40}
            className="location-detail-flag"
          />
          <h3>
            {selected.city}
            <span>{selected.country}</span>
          </h3>
          <div className="location-facts">
            <span>
              <Network />
              {selected.network}
            </span>
            <span>
              <ShieldCheck />
              {selected.tier} facility
            </span>
            <span>
              <MapPin />
              24/7 monitoring
            </span>
          </div>
          <p>{note}</p>
          <CtaLink href="/pricing" arrow={false} className="cta-button rounded-md">
            Configure a Server
            <ArrowRight className="size-4" />
          </CtaLink>
        </div>
      </div>
    </div>
  );
}
