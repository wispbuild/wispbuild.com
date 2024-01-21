import React from "react";
import { ImageResponse } from "@vercel/og";
import { default as ogAllowList } from "./og-allow-list.json";
import type { PagesFunction } from "@cloudflare/workers-types";

const home = () =>
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#fff',
      fontSize: '144px',
      fontWeight: '600'
    }}
  >
    <div style=
      {{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      <div>Wisp Build</div>
    </div>
  </div>;

const docPage = (header: string, subheader: string) =>
  <div
    style={{
      width: '100%',
      height: '100%',
      padding: '40px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#fff',
      fontSize: '108px',
      fontWeight: '600'
    }}
  >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <div style=
          {{
            fontSize: '108px',
            fontWeight: '600',
            marginBottom: '30px'
          }}
        >
          {header}
        </div>
        <div style=
          {{
            fontSize: '48px',
            fontWeight: '400',
          }}
        >
          {subheader}
        </div>
    </div>
  </div>;

export const onRequest: PagesFunction = async({request}) => {
  let element = home();

  const { search, searchParams } = new URL(request.url);
  if (ogAllowList.includes(`/og${search}`)) {
    let header = searchParams.get('header');
    let subheader = searchParams.get('subheader');      

    if (header !== null && subheader !== null) {
      element = docPage(header, subheader);
    }
  }
  
  return new ImageResponse(
    element,
    {
      width: 1200,
      height: 630,
    }
  );
};
