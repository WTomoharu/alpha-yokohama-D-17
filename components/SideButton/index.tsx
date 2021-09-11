export const SideButton = (
  { children, ...props }: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) => {
  return (
    <button className="
      w-8 lg:w-14 h-8 lg:h-14 m-2 text-base lg:text-4xl 
      rounded-full bg-gray-600 shadow-md 
      hover:bg-gray-500 text-white
    " {...props}>{children}</button>
  )
}