export const House: React.FC = () => {
  return (
    <svg
      className={
        'dark:fill-blue-500 dark:group-hover:fill-blue-300 fill-blue-300 group-hover:fill-blue-500'
      }
      viewBox="0 0 16 16"
      height="2em"
      width="2em"
    >
      <path
        fillRule="evenodd"
        d="M8 3.293l6 6V13.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
      />
      <path
        fillRule="evenodd"
        d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z"
      />
    </svg>
  );
};

export const Calendar: React.FC = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className={
        'dark:fill-blue-500 dark:group-hover:fill-blue-300 fill-blue-300 group-hover:fill-blue-500'
      }
      height="2em"
      width="2em"
    >
      <path d="M112 880c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V460H112v420zm768-696H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v176h800V216c0-17.7-14.3-32-32-32z" />
    </svg>
  );
};

export const Cog: React.FC = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={
        'dark:fill-blue-500 dark:group-hover:fill-blue-300 fill-blue-300 group-hover:fill-blue-500'
      }
      height="2em"
      width="2em"
    >
      <path d="M2.344 15.271l2 3.46a1 1 0 001.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 001 1h4a1 1 0 001-1v-1.598a8.094 8.094 0 001.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 00-.365-1.366l-1.372-.793a7.683 7.683 0 00-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 00-1.366-.365l-1.396.806A8.034 8.034 0 0015 4.598V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v1.598A8.094 8.094 0 007.105 5.71L5.71 4.904a.999.999 0 00-1.366.365l-2 3.46a1.004 1.004 0 00.365 1.366l1.372.793a7.683 7.683 0 000 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z" />
    </svg>
  );
};

export const Exit: React.FC = () => {
  return (
    <svg
      viewBox="0 0 512 512"
      className="dark:fill-blue-500 dark:group-hover:fill-blue-300 fill-blue-300 group-hover:fill-blue-500"
      height="1.5em"
      width="1.5em"
    >
      <path d="M335.69 272h-161v-32h161V92a12 12 0 00-12-12h-280a12 12 0 00-12 12v328a12 12 0 0012 12h280a12 12 0 0012-12zM419.06 272l-64 64 22.63 22.63L480.31 256 377.69 153.37 355.06 176l64 64h-83.37v32h83.37z" />
    </svg>
  );
};

const Icons = {
  House: <House />,
  Calendar: <Calendar />,
  Cog: <Cog />,
};

export default Icons;
