import React from 'react';
import {
  Defs,
  // FeBlend,
  FeColorMatrix,
  // FeComposite,
  // FeFlood,
  FeGaussianBlur,
  FeOffset,
  Filter,
  G,
  Path,
  Svg,
} from 'react-native-svg';

function LocationBroadcastIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M15 5H5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6C4 6.26522 4.10536 6.51957 4.29289 6.70711C4.48043 6.89464 4.73478 7 5 7H15C15.2652 7 15.5196 6.89464 15.7071 6.70711C15.8946 6.51957 16 6.26522 16 6C16 5.73478 15.8946 5.48043 15.7071 5.29289C15.5196 5.10536 15.2652 5 15 5ZM15 9H5C4.73478 9 4.48043 9.10536 4.29289 9.29289C4.10536 9.48043 4 9.73479 4 10C4 10.2652 4.10536 10.5196 4.29289 10.7071C4.48043 10.8946 4.73478 11 5 11H15C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10C16 9.73479 15.8946 9.48043 15.7071 9.29289C15.5196 9.10536 15.2652 9 15 9ZM17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7957 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H14.59L18.29 19.71C18.3834 19.8027 18.4943 19.876 18.6161 19.9258C18.7379 19.9755 18.8684 20.0008 19 20C19.1312 20.0034 19.2613 19.976 19.38 19.92C19.5626 19.845 19.7189 19.7176 19.8293 19.5539C19.9396 19.3901 19.999 19.1974 20 19V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM18 16.59L15.71 14.29C15.6166 14.1973 15.5057 14.124 15.3839 14.0742C15.2621 14.0245 15.1316 13.9992 15 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V16.59Z"
        fill="#959398"
      />
    </Svg>
  );
}

function LocationBroadcastFocus() {
  return (
    <Svg width="49" height="49" viewBox="0 0 49 49" fill="none">
      <G filter="url(#filter0_d_90_1562)">
        <Path
          d="M12.8334 9.91666H36.1667C36.9403 9.91666 37.6821 10.2239 38.2291 10.7709C38.7761 11.3179 39.0834 12.0598 39.0834 12.8333V39.0833L33.25 33.25H12.8334C12.0598 33.25 11.318 32.9427 10.771 32.3957C10.224 31.8487 9.91671 31.1069 9.91671 30.3333V12.8333C9.91671 12.0598 10.224 11.3179 10.771 10.7709C11.318 10.2239 12.0598 9.91666 12.8334 9.91666Z"
          fill="#50D6E2"
        />
      </G>
      <Defs>
        <Filter
          id="filter0_d_90_1562"
          x="0.516748"
          y="0.516657"
          width="47.9666"
          height="47.9667"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          {/* <FeFlood flood-opacity="0" result="BackgroundImageFix" /> */}
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset />
          <FeGaussianBlur stdDeviation="0.7" />
          {/* <FeComposite in2="hardAlpha" operator="out" /> */}
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0.315062 0 0 0 0 0.839304 0 0 0 0 0.886111 0 0 0 0.79 0"
          />
          {/* <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_90_1562"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_90_1562"
            result="shape"
          /> */}
        </Filter>
      </Defs>
    </Svg>
  );
}

export { LocationBroadcastIcon, LocationBroadcastFocus };
