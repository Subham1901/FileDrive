const HeaderProfileView = () => {
  return (
    <div className="flex ml-auto">
      <a href="" className="flex flex-row items-center">
        <img
          src="https://xsgames.co/randomusers/assets/avatars/male/69.jpg"
          alt="Profile Picture"
          className="h-10 w-10 bg-gray-200 border rounded-full"
        />
        <span className="flex flex-col ml-2">
          <span className="truncate w-20 font-semibold tracking-wide leading-none">
            John Doe
          </span>
          <span className="truncate w-20 text-gray-500 text-xs leading-none mt-1">
            8172651456
          </span>
        </span>
      </a>
    </div>
  );
};

export default HeaderProfileView;
