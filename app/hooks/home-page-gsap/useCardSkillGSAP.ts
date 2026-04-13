import { gsap, mediaQueries, SplitText, ScrollTrigger } from "@utils/gsap/gsap";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
/** Custom hook to handle GSAP animations in cards skill animation in the Home page */
export default function useCardSkillGSAP(
  scopeRef: RefObject<HTMLElement | null>,
) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        // media queries conditions giving a responsive animation
        // based on screen size and reduce motion
        mediaQueries,
        (context) => {
          ScrollTrigger.normalizeScroll(true);
          const { reduceMotion, isSmallScreen } = context.conditions ?? {};
          ScrollTrigger.refresh();

          const listCardSkills =
            gsap.utils.toArray<HTMLElement>(".list-card-skill");
          const firstCard = listCardSkills[0];
          const lastCard = listCardSkills[listCardSkills.length - 1];
          const totalDistance =
            firstCard && lastCard
              ? lastCard.offsetTop - firstCard.offsetTop
              : 0;
          const snapPoints =
            listCardSkills.length > 1
              ? listCardSkills.map((card) =>
                  totalDistance
                    ? (card.offsetTop - firstCard.offsetTop) / totalDistance
                    : 0,
                )
              : [0];

          console.log("CardSkill snap values:", {
            count: listCardSkills.length,
            firstOffset: firstCard?.offsetTop,
            lastOffset: lastCard?.offsetTop,
            totalDistance,
            snapPoints,
            isSmallScreen,
          });

          const snapCardSkill =
            !isSmallScreen &&
            gsap.to(listCardSkills, {
              y: -totalDistance,
              opacity: 1,
              ease: "none",
              overwrite: true,
            });

          if (!isSmallScreen)
            ScrollTrigger.create({
              animation: snapCardSkill || undefined,
              trigger: ".container-cards",
              start: "top top",
              end: "+=" + totalDistance,
              pin: true,
              pinSpacing: true,
              scrub: 1,
              snap: {
                snapTo: snapPoints,
                duration: 0.25,
                ease: "power1.out",
                directional: false,
                delay: 0.2,
              },
            });

          //  wait for fonts to be loaded before animating SplitText
          document.fonts.ready.then(() => {
            const cardSkillP = SplitText.create(".card-skill-p", {
              type: "words",
              autoSplit: true,
              mask: "words",
            });

            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: ".card-skill-header",
                start: "top 70%",
              },
            });
            timeline
              .fromTo(
                ".card-skill-header",
                {
                  y: -100,
                  opacity: 0,
                },
                {
                  y: 0,
                  opacity: 1,
                },
              )
              .from(
                cardSkillP.words,
                {
                  y: -50,
                  opacity: 0,
                  autoAlpha: 0,
                  lazy: false,
                  stagger: {
                    amount: 1,
                    from: "random",
                    ease: reduceMotion ? "none" : "power4.in",
                  },
                },
                "-=0.5",
              );
          });
        },
      );
    },

    {
      scope: scopeRef,
    },
  );
}
