export interface Props {
  rootId: string;
}

const intersectionX = (element: DOMRect, container: DOMRect) => {
  const delta = container.width / 1000;
  if (element.right < container.left - delta) {
    return 0.0;
  }
  if (element.left > container.right + delta) {
    return 0.0;
  }
  if (element.left < container.left - delta) {
    return element.right - container.left + delta;
  }
  if (element.right > container.right + delta) {
    return container.right - element.left + delta;
  }
  return element.width;
};

const getSliderElements = (rootId: string) => {
  const root = document.getElementById(rootId);
  const slider = root?.querySelector<HTMLElement>("[data-slider]");
  const items = root?.querySelectorAll<HTMLElement>("[data-slider] li");

  return { root, slider, items };
};

const getElementsInsideContainer = (rootId: string): number[] => {
  const { slider, items } = getSliderElements(rootId);

  if (!slider || !items) return [];

  const indices = [];
  const sliderRect = slider.getBoundingClientRect();

  for (let index = 0; index < items.length; index++) {
    const item = items.item(index);
    const rect = item.getBoundingClientRect();
    const ratio = intersectionX(rect, sliderRect) / rect.width;

    if (ratio === 1) {
      indices.push(index);
    }
  }

  return indices;
};

const isHTMLElement = (x: Element): x is HTMLElement =>
  // deno-lint-ignore no-explicit-any
  typeof (x as any).offsetLeft === "number";

export function CarouselButtons({ rootId }: Props) {
  const goToItem = (rootId: string, to: number) => {
    const { slider, items } = getSliderElements(rootId);

    if (!slider || !items) return [];

    const item = items.item(to);
    if (!isHTMLElement(item)) {
      console.warn(
        `Element at index ${to} is not an html element. Skipping carousel`
      );
      return;
    }

    item.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const handleClickPrev = (ev: MouseEvent) => {
    ev?.stopPropagation();
    const indices = getElementsInsideContainer(rootId);
    const { items } = getSliderElements(rootId);

    if (!items) return;

    const isShowingFirst = indices[0] === 0;

    goToItem(rootId, isShowingFirst ? items.length - 1 : indices[0] - 1);
  };

  const handleClickNext = (ev: MouseEvent) => {
    ev?.stopPropagation();
    const indices = getElementsInsideContainer(rootId);
    const { items } = getSliderElements(rootId);

    if (!items) return;

    const isShowingLast = indices[indices.length - 1] === items.length - 1;

    goToItem(rootId, isShowingLast ? 0 : indices.at(-1)! + 1);
  };

  return (
    <div class="absolute container flex justify-between max-w-7xl top-20 -translate-1/2 left-1/2 z-10 px-4 sm:px-8">
      <button
        type="button"
        class="btn btn-circle text-center btn-accent"
        onClick={handleClickPrev}
      >
        <img src="/icons/chevron-left.svg" alt="" height="20" width="12" />
      </button>
      <button
        type="button"
        class="btn btn-circle text-center btn-accent"
        onClick={handleClickNext}
      >
        <img src="/icons/chevron-right.svg" alt="" height="20" width="12" />
      </button>
    </div>
  );
}
