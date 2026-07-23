import '../services/styles/platform.css';
const platforms = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd43NPXZcOp-N1vst9Acu-2IV7ZqJ3zQiOJpoW5YOOyg&s=10',
    title: "Github",
    url: "https://github.com",
  },
  {
    id: 2,
    image:
      "https://brandlogos.net/wp-content/uploads/2025/03/gitlab_icon-logo_brandlogos.net_tschk-512x512.png",
    title: "Gitlab",
    url: "https://gitlab.com",
  },
];

export const Platform = () => {
  return (
    <div className='platforms'>
      {platforms.map((item) => {
        return (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img src={item.image} alt={item.title} className="logo"/>
          </a>
        );
      })}
    </div>
  );
};
