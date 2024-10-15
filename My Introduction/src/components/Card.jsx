const Card = ({ username }) => {
  return (
    <div class="w-[300px] rounded-md border">
      <img
        src="https://scontent.fkhi3-1.fna.fbcdn.net/v/t39.30808-1/419488087_1118439279498174_2255084320924891353_n.jpg?stp=dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qzHu-ehhPm8Ab7lxiKS&_nc_ht=scontent.fkhi3-1.fna&oh=00_AfAQK1aJnXorcLhA0zA-or4mLB6GH2W7oDi2Z9Q6XwGHBg&oe=66204114"
        alt="Name"
        class="h-[200px] w-full rounded-md object-cover"
      />
      <div class="p-4">
        <h1 class="text-lg font-semibold">{username}</h1>
        <p class="mt-3 text-sm text-gray-600">
          Hey guys! i am doing BS Information Technology at Quest Nawabshah
        </p>
        <button
          type="button"
          class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
  );
};

export default Card;
