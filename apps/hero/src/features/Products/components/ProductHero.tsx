import type { FC } from 'react';

const ProductHero: FC<{ label?: string }> = ({ label }) => {
  return (
    <section className="h-[768px] relative" id="product-hero">
      <div className="absolute h-[768px] w-full">
        <div className="absolute top-1/3 left-0 ml-8 text-2xl text-white p-2 rounded border border-black/20 bg-black/50">
          <p>The only shirt you'll ever need.</p>
          <p className="text-lg">
            Unless, you know, it isn't.
            {label ?? ''}
          </p>
        </div>
        <img
          src="./assets/NatureHero.png"
          alt="Nature"
          className="h-full w-full object-cover"
        />
        <img
          src="./assets/WhiteShirt.png"
          alt="White T-shirt"
          className="w-[400px] h-auto absolute right-0 top-1/4 mr-8 transform -translate-y-1/4"
        />
      </div>
    </section>
  );
};

export default ProductHero;
