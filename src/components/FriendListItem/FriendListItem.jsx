import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  let statusText;
  let classnames;

  if (isOnline) {
    statusText = "Online";
    classnames = styles["friend-online"];
  } else {
    statusText = "Offline";
    classnames = styles["friend-offline"];
  }

  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={classnames}>{statusText}</p>
    </div>
  );
};

export default FriendListItem;
