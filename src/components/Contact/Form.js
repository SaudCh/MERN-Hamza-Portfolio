const Form = () => {
  return (
    <form className="space-y-3 px-10">
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-xl border border-gray-400 px-4 py-2 text-lg disabled:opacity-50"
        disabled
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full rounded-xl border border-gray-400 px-4 py-2 text-lg disabled:opacity-50" 
        disabled
      />
      <textarea
        className="w-full resize-none rounded-xl border border-gray-400 px-4 py-2 text-lg disabled:opacity-50"
        placeholder="Message"
        rows={5}
        disabled
      />
      <button
        type="submit"
        className="bg-primary rounded-lg px-3 py-2 text-lg font-bold text-white disabled:opacity-50"
        disabled
      >
        Send Email
      </button>
    </form>
  );
};

export default Form;
