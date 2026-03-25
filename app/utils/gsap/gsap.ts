/**
 * This file is used to import all the Gsap plugins and Gsap itself once,
 * register all the plugins at once and export it to be used across the project.
 * This is done to avoid importing and registering the plugins in each component.
 */
import { gsap } from "gsap";
import {
  ScrollTrigger,
  SplitText,
  DrawSVGPlugin,
  MorphSVGPlugin,
  ScrollSmoother,
  GSDevTools,
} from "gsap/all";

/**
 * Registers all the Gsap plugins at once.
 */
gsap.registerPlugin(
  SplitText,
  ScrollTrigger,
  DrawSVGPlugin,
  MorphSVGPlugin,
  ScrollSmoother,
  GSDevTools,
);

/**
 * Exports all the Gsap plugins and Gsap itself to be used across the project.
 */
export {
  gsap,
  SplitText,
  ScrollTrigger,
  DrawSVGPlugin,
  MorphSVGPlugin,
  ScrollSmoother,
  GSDevTools,
};
