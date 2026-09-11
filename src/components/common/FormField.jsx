const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  optional = false,
  rows,
  children,
}) => {
  const baseClasses =
    "w-full rounded-2xl border border-violet-100/90 bg-white/75 px-4 py-3.5 text-sm font-medium text-stone-900 shadow-[0_12px_32px_rgba(91,33,182,0.06)] outline-none backdrop-blur transition duration-200 placeholder:text-stone-400 hover:border-violet-300 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10";

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold tracking-tight text-stone-900"
      >
        {label}

        {optional && (
          <span className="ml-2 text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
            Optional
          </span>
        )}
      </label>

      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={baseClasses}
        >
          {children}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows || 5}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseClasses}
        />
      )}
    </div>
  );
};

export default FormField;