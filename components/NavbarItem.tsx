import React from "react";

interface NavbarItemProps {
  label: string;
}

const NavbarItem = ({ label }: NavbarItemProps) => {
  return (
    <div className="text-sm text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
};

export default NavbarItem;
