import Omelette from "./assets/images/image-omelette.jpeg";

function App() {
    return (
        <main className="flex flex-col items-center justify-center bg-c-stone-100 md:px-12 md:py-32">
            <section className="flex h-full w-full flex-col bg-c-white md:max-w-[38.5rem] md:gap-10 md:rounded-xl md:p-10 md:shadow-2xl lg:max-w-[46rem]">
                <div className="w-full">
                    <img src={Omelette} alt="Omelette" className="mb-10 w-full md:mb-0 md:h-[18.75rem] md:rounded-xl" />
                </div>
                <div className="flex flex-col items-center justify-center gap-8 px-6">
                    {/* Introduction to Recipe */}
                    <div className="flex w-full flex-col gap-6">
                        <h1 className="text-preset-1 text-c-stone-900">Simple Omelette Recipe</h1>
                        <p className="text-preset-4 text-c-stone-600">
                            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs
                            cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                        </p>
                    </div>

                    {/* Preparation time */}
                    <div className="flex w-full flex-col gap-4 bg-c-rose-50 p-6 md:rounded-xl">
                        <h3 className="text-preset-3 text-c-rose-800">Preparation time</h3>
                        <ul className="flex list-disc flex-col gap-2 pl-5 text-preset-4 text-c-stone-600 marker:text-c-rose-800">
                            <li className="pl-2">
                                <span className="text-preset-4Bold">Total</span>: Approximately 10 minutes
                            </li>
                            <li className="pl-2">
                                <span className="text-preset-4Bold">Preparation</span>: 5 minutes
                            </li>
                            <li className="pl-2">
                                <span className="text-preset-4Bold">Cooking</span>: 5 minutes
                            </li>
                        </ul>
                    </div>
                    {/* Ingredients */}
                    <div className="flex w-full flex-col gap-6">
                        <h2 className="text-preset-2 text-c-brown-800">Ingredients</h2>
                        <ul className="flex list-disc flex-col gap-2 pl-7 text-preset-4 text-c-stone-600 marker:text-c-brown-800">
                            <li className="pl-2">2-3 large eggs</li>
                            <li className="pl-2">Salt, to taste</li>
                            <li className="pl-2">Pepper, to taste</li>
                            <li className="pl-2">1 tablespoon of butter or oil</li>
                            <li className="pl-2">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                        </ul>
                    </div>
                    {/* Separator */}
                    <hr className="w-full border-t border-c-stone-150" />
                    {/* Instructions */}
                    <div className="flex w-full flex-col gap-6">
                        <h2 className="text-preset-2 text-c-brown-800">Instructions</h2>
                        <ol className="flex list-decimal flex-col gap-2 pl-7 text-preset-4 text-c-stone-600 marker:text-preset-4Bold marker:text-c-brown-800">
                            <li className="pl-2">
                                <span className="text-preset-4Bold">Beat the eggs:</span> In a bowl, beat the eggs with
                                a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water
                                or milk for a fluffier texture.
                            </li>
                            <li className="pl-2">
                                <span className="text-preset-4Bold">Heat the pan:</span> Place on non-stick frying pan
                                over medium heat and add butter or oil.
                            </li>
                            <li className="pl-2">
                                <span className="text-preset-4Bold">Cook the omelette:</span> Once the butter is melted
                                and bubbling, pour in the eggs. Tilt the pan to ensure the egs evenly coat the surface.
                            </li>
                            <li className="pl-2">
                                <span className="text-preset-4Bold">Add fillings (optional):</span> When the eggs begin
                                to set at the edges but are sill slightly runny in the middle, sprinkle your chosen
                                fillings over one half of the omelette.
                            </li>
                            <li className="pl-2">
                                <span className="text-preset-4Bold">Fold and serve:</span> As the omelette continues to
                                cook, carefully lift one edge and fold it over the fillings. Let it cook for another
                                minute, then slide it onto a plate.
                            </li>
                            <li className="pl-2">
                                <span className="text-preset-4Bold">Enjoy:</span> Serve hot, with additional salt and
                                pepper if needed.
                            </li>
                        </ol>
                    </div>
                    {/* Separator */}
                    <hr className="w-full border-t border-c-stone-150" />
                    {/* Nutrition */}
                    <div className="flex w-full flex-col gap-6">
                        <h2 className="text-preset-2 text-c-brown-800">Nutrition</h2>
                        <p className="text-preset-4 text-c-stone-600">
                            The table below shows nutritional values per serving without the additional fillings.
                        </p>
                        <table className="w-full border-collapse text-left">
                            <tbody>
                                <tr className="border-b border-c-stone-150">
                                    <td className="py-4 pl-8 text-preset-4 text-c-stone-600">Calories</td>
                                    <td className="py-4 pr-4 text-preset-4Bold text-c-brown-800">277kcal</td>
                                </tr>
                                <tr className="border-b border-c-stone-150">
                                    <td className="py-4 pl-8 text-preset-4 text-c-stone-600">Carbs</td>
                                    <td className="py-4 pr-4 text-preset-4Bold text-c-brown-800">0g</td>
                                </tr>
                                <tr className="border-b border-c-stone-150">
                                    <td className="py-4 pl-8 text-preset-4 text-c-stone-600">Protein</td>
                                    <td className="py-4 pr-4 text-preset-4Bold text-c-brown-800">20g</td>
                                </tr>
                                <tr className="border-c-stone-150">
                                    <td className="py-4 pl-8 text-preset-4 text-c-stone-600">Fat</td>
                                    <td className="py-4 pr-4 text-preset-4Bold text-c-brown-800">22g</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
