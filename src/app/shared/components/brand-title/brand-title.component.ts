import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RippleModule } from "primeng/ripple";

@Component({
  selector: "app-brand-title",
  standalone: true,
  imports: [CommonModule, RouterModule, RippleModule],
  template: `
    <div
      pRipple
      class="flex flex-row flex-nowrap justify-content-center align-items-center gap-2 border-round text-color text-xl sm:text-2xl font-bold select-none cursor-pointer hover:text-orange-400 w-full p-2"
      routerLink="/"
    >
      <span class="line-height-1">HARD</span>
      <div class="flex flex-nowrap justify-content-center align-items-center">
        <span class="line-height-1">ST</span>
        <svg
          version="1.2"
          class="svg-res"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 2256 2256"
        >
          <g>
            <g id="&lt;Group&gt;">
              <path
                id="&lt;Path&gt;"
                class="s0"
                d="m454.9 569.6c98.6 18.6 226.6 60.2 350.7 155.1 28.2 21.5 53.6 43.9 76.4 66.1 68.2-49.8 152.3-79.2 243.3-79.2q16.4 0 32.5 1.3c-10.4-107.7-40.9-195.3-78.6-265.5-55.3-102.9-126.6-168.1-178.3-206.1-25.4-18.7-57.6-23-86.5-11.5-69.5 27.6-154.1 69.9-242.1 135.4-55.5 41.2-102 84.1-140.5 124.5-25.5 26.7-12 73.2 23.1 79.9z"
              />
              <path
                id="&lt;Path&gt;"
                class="s0"
                d="m1243.6 626.5c0.4 35.5-1.5 69.2-5 100.8 95.8 27.3 177.5 88.3 231.2 169.4 78.4-74.5 128.7-152.4 160.8-225.3 47-107 54.4-203.3 52.6-267.4-0.9-31.5-17.4-59.6-44.2-75.3-64.5-37.7-149.9-78.4-255.7-107.4-66.7-18.3-129.1-28.6-184.7-34.1-36.7-3.6-65 35.7-48.7 67.4 46.1 89.2 92 215.6 93.7 371.9z"
              />
              <path
                id="&lt;Path&gt;"
                class="s0"
                d="m2068.7 1039.4c-9.9-74.1-30.5-166.4-72.7-267.6-26.7-63.8-57-119.4-86.9-166.5-19.8-31.2-68.1-29.4-83.1 3.1-41.9 91.2-113.2 205.2-235.3 302.7-27.7 22.2-55.5 41.4-82.6 58.1 19.5 48 30.2 100.4 30.2 155.4 0 45.9-7.5 90-21.3 131.2 107 15.8 199.4 7.5 276.5-12.1 113.3-28.8 193.7-82.2 243.1-123.1 24.3-20.2 36.3-50.4 32.1-81.2z"
              />
              <path
                id="&lt;Path&gt;"
                class="s0"
                d="m1963.5 1359c-97.7 23.1-231.5 37.1-383.5 0.9-34.5-8.2-66.8-18.2-96.6-29.3-48.8 84.7-126.9 150.4-220.3 183.5 53.3 94 116.8 161.7 179.7 210.4 92.5 71.5 184.1 102 246.8 115.8 30.8 6.7 62-2.5 83.7-24.7 52.2-53.5 112.3-126.5 166.1-222.1 33.9-60.3 59-118.4 77.7-171 12.4-34.8-18.8-71.8-53.6-63.5z"
              />
              <path
                id="&lt;Path&gt;"
                class="s0"
                d="m1456.7 1929.4c-78.4-62.8-171.8-159.6-236.9-301.6-14.8-32.3-26.7-63.9-36.4-94.2-19 2.6-38.4 4-58.1 4-81.7 0-157.9-23.7-222.1-64.7-41.2 99.9-55.5 191.6-55.1 271.2 0.5 116.9 32.9 207.9 60.7 265.7 13.6 28.5 40.1 47.4 71 50.8 74.2 8.2 168.8 10.7 277.2-5.8 68.4-10.4 129.6-26.4 182.6-44 35-11.7 45-59.1 17.1-81.4z"
              />
              <path
                id="&lt;Path&gt;"
                class="s0"
                d="m714.2 1164.1c-104.2 29-185.3 74.2-247.8 123.5-91.8 72.3-143.5 153.9-172 211.4-14 28.2-12.6 60.7 3.7 87.2 39.2 63.6 95.5 139.6 175.3 214.9 50.3 47.4 100.6 85.8 147.1 116.7 30.7 20.5 74.2-0.9 74.6-36.6 1.3-100.4 20-233.6 91.9-372.3 16.3-31.6 33.9-60.4 51.9-86.7-69.2-66.6-115.2-157.1-124.7-258.1z"
              />
              <path
                id="&lt;Path&gt;"
                class="s0"
                d="m714.4 1082.1c10.4-100.9 57-191.1 126.7-257.2-87-64.2-172.5-100.3-249.9-119.2-113.5-27.8-209.6-18.3-272.4-5.4-30.9 6.4-55.7 27.5-66.5 56.6-25.9 70.1-51.2 161.3-61.4 270.5-6.5 68.8-5.7 132.1-1.5 187.8 2.9 36.8 46.4 57.9 74.9 36.2 79.8-60.8 196.3-128 349.9-156.8 34.9-6.6 68.5-10.5 100.2-12.5z"
              />
              <path
                id="&lt;Path&gt;"
                class="s0"
                d="m1127.8 750.3c-208 0-376.7 168.6-376.7 376.7 0 208.1 168.7 376.7 376.7 376.7 208.1 0 376.8-168.6 376.8-376.7 0-208.1-168.7-376.7-376.8-376.7z"
              />
            </g>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 1128 1128"
              to="360 1128 1128"
              dur="2s"
              repeatCount="indefinite"
            />
          </g>
        </svg>
        <span class="line-height-1">RE</span>
      </div>
    </div>
  `,
  styles: `
    .svg-res {
      width: 1.5rem;
      height: 1.5rem;
    }

    @media screen and (max-width: 575px) {
      .svg-res {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandTitleComponent {}
