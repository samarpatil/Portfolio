function Stats() {
  return (
    <section className="py-20 text-center">

      <h2 className="text-3xl font-semibold mb-10">
        My Stats
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

        <div>
          <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
          <p className="text-gray-400">Projects</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-cyan-400">300+</h3>
          <p className="text-gray-400">DSA Problems</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
          <p className="text-gray-400">Technologies</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-cyan-400">2+</h3>
          <p className="text-gray-400">Live Projects</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;