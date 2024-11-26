import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Find and book <span className="text-primary">appointments</span> with the best <span className="text-primary">doctors</span>
          </h2>

          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
            sequi.
          </p>

          <Button className="mt-10">Explore now</Button>
        </div>
      </div>

      <div>
        <Image
          src="https://plus.unsplash.com/premium_photo-1681843004557-f3128f91aeb7?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded"
          alt=""
          width={800}
          height={800}
        />
      </div>
    </div>
  </div>
</section>
  )
}
