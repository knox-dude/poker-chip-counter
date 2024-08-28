import React, { useState } from 'react';

interface ButtonProps {
  text: string;
  action: () => void;
}

const Button = ({ text, action }: ButtonProps) => {

  return (
      <button
        type="submit"
        className="bg-slate-400 mt-4 mb-4 text-white rounded-md p-2 disabled:cursor-not-allowed disabled:opacity-30 enabled:hover:bg-paper-600"
        onSubmit={() => action()}
      >
        {text}
      </button>
  );
};

export default Button;