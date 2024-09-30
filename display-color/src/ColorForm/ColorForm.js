const ColorForm = ( { setColor } ) => {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}    
        >
            <label className="colorLabel" htmlFor="colorField" > Input Color </label>
        <input
            autoFocus
            id="colorField"
            type="text"
            required
            placeholder="Add color name"
            // value={ color }
            onChange={(e) => setColor(e.target.value)}
        />
        </form>
    );
};

export default ColorForm;