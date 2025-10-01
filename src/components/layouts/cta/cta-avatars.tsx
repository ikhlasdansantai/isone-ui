import Image from "next/image";

export default function CtaAvatars() {
  return (
    <div className="flex items-center justify-center mx-auto w-full">
      <figure className="rounded-full overflow-hidden size-12">
        <Image
          src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png"
          alt="user-1"
          className="aspect-square object-cover"
          width={48}
          height={24}
        />
      </figure>
      <figure className="rounded-full overflow-hidden size-12 -ml-3">
        <Image
          src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_3.png"
          alt="user-1"
          className="aspect-square object-cover"
          width={48}
          height={24}
        />
      </figure>
      <figure className="rounded-full overflow-hidden size-12 -ml-3">
        <Image
          src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_5.png"
          alt="user-1"
          className="aspect-square object-cover"
          width={48}
          height={48}
        />
      </figure>
    </div>
  );
}
