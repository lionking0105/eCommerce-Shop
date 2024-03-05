"use client";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import Image from "next/image";
import React from "react";
import { FaHeartCrack } from "react-icons/fa6";

const WishItem = ({ id, title, price, image, slug }: ProductInWishlist) => {
  const { removeFromWishlist } = useWishlistStore();
  return (
    <tr className="hover cursor-pointer">
      <th className="text-black text-sm text-center">{id}</th>
      <th>
        <div className="w-12 h-12 mx-auto">
          <Image
            src={`/${image}`}
            width={200}
            height={200}
            className="w-auto h-auto"
            alt={title}
          />
        </div>
      </th>
      <td className="text-black text-sm text-center">{title}</td>
      <td className="text-black text-sm text-center">In stock</td>
      <td>
        <button className="btn btn-xs bg-custom-yellow text-black border border-black hover:bg-black hover:text-custom-yellow text-sm">
          <FaHeartCrack />
          <span
            className="max-sm:hidden"
            onClick={() => removeFromWishlist(id)}
          >
            remove from the wishlist
          </span>
        </button>
      </td>
    </tr>
  );
};

export default WishItem;