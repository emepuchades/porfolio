import { useEffect, useState } from "react";
import { AppImage } from "./AppImage";
import { AppCarouselIndexer } from "./AppCarpuselIndexer";
import { AppCarouselButton } from "./AppCarouselButton";

function AppCarousel({ data }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (selected < 0) {
      setSelected(0);
    }
    if (selected > data.length - 1) {
      setSelected(data.length - 1);
    }
  }, [selected, data.length]);

  return (
    <div className="w-full h-96 relative overflow-hidden">
      {data.map((project, i) => (
        <AppImage
          key={`image-${i}`}
          image={project}
          index={i}
          selected={selected}
        />
      ))}
      <AppCarouselIndexer selected={selected} imagesLenght={data.length} />
      {selected > 0 && (
        <AppCarouselButton
          direction="left"
          onClick={() => setSelected(selected - 1)}
        />
      )}
      {selected < data.length - 1 && (
        <AppCarouselButton
          direction="right"
          onClick={() => setSelected(selected + 1)}
        />
      )}
    </div>
  );
};

export default AppCarousel;
