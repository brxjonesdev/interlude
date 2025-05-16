type DialogCopy = {
  title: string;
  description: string;
};

export function getRandomLoopDialogCopy(): DialogCopy {
  const options: DialogCopy[] = [
    {
      title: "New loop, who dis?",
      description: "Connect your GitHub repo. Share your work. Impress future-you.",
    },
    {
      title: "Start a new loop",
      description: "Link your GitHub. Build in public. Future users will thank you.",
    },
    {
      title: "Loop it up",
      description: "Push code, make noise, repeat. Your repo belongs here.",
    },
    {
      title: "Another one?",
      description: "You know the drill. GitHub, Loop, greatness.",
    },
    {
      title: "Fresh loop energy",
      description: "Hook up your repo. Do the dev thing. Keep it moving.",
    },
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

