import { useState } from "react";

const bmiRanges = [
  { label: "Underweight", range: "Below 18.5", color: "bg-sky-400" },
  { label: "Healthy weight", range: "18.5 – 24.9", color: "bg-emerald-500" },
  { label: "Overweight", range: "25.0 – 29.9", color: "bg-amber-400" },
  { label: "Obese", range: "30.0 and above", color: "bg-rose-500" },
];

function BmiCal() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  function calculateBmi(event) {
    event.preventDefault();
    const heightInMeters = Number(height) / 100;
    const weightInKg = Number(weight);

    if (heightInMeters <= 0 || weightInKg <= 0) {
      setResult({ error: "Please enter valid height and weight values." });
      return;
    }

    const bmi = weightInKg / heightInMeters ** 2;
    const category = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Healthy weight" : bmi < 30 ? "Overweight" : "Obese";
    const styles = {
      Underweight: "border-sky-200 bg-sky-50 text-sky-700",
      "Healthy weight": "border-emerald-200 bg-emerald-50 text-emerald-700",
      Overweight: "border-amber-200 bg-amber-50 text-amber-700",
      Obese: "border-rose-200 bg-rose-50 text-rose-700",
    };
    setResult({ bmi: bmi.toFixed(1), category, style: styles[category] });
  }

  function resetCalculator() {
    setHeight("");
    setWeight("");
    setResult(null);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 px-4 py-10 font-sans text-slate-900 sm:px-6 lg:flex lg:items-center lg:justify-center">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      <section className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/30 lg:grid lg:grid-cols-[.9fr_1.1fr]">
        <div className="relative bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-700 p-7 text-white sm:p-10 lg:p-12">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[28px] border-white/10" />
          <div className="absolute -bottom-20 -left-14 h-44 w-44 rounded-full border-[25px] border-white/10" />
          <div className="relative">
            <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z" /><path d="M12 7v5l3 2" /></svg>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Wellness check</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Know your BMI.</h1>
            <p className="mt-5 max-w-sm text-base leading-7 text-blue-50">A simple way to understand how your weight relates to your height.</p>
            <div className="mt-12 space-y-4">
              {bmiRanges.map((item) => <div key={item.label} className="flex items-center gap-3 text-sm text-white/90"><span className={`h-2.5 w-2.5 rounded-full ${item.color}`} /><span className="font-medium">{item.label}</span><span className="ml-auto text-white/65">{item.range}</span></div>)}
            </div>
          </div>
        </div>
        <div className="p-7 sm:p-10 lg:p-12">
          <div className="mb-8"><h2 className="text-2xl font-bold tracking-tight text-slate-900">Calculate your BMI</h2><p className="mt-2 text-sm leading-6 text-slate-500">Enter your measurements below to get your result.</p></div>
          <form onSubmit={calculateBmi} className="space-y-5">
            <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">Height</span><div className="relative"><input type="number" min="1" inputMode="decimal" value={height} onChange={(event) => setHeight(event.target.value)} placeholder="170" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-16 text-base font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" /><span className="absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-400">cm</span></div></label>
            <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">Weight</span><div className="relative"><input type="number" min="1" step="0.1" inputMode="decimal" value={weight} onChange={(event) => setWeight(event.target.value)} placeholder="65" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-16 text-base font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" /><span className="absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-400">kg</span></div></label>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row"><button type="submit" className="inline-flex flex-1 items-center justify-center rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200">Calculate BMI</button><button type="button" onClick={resetCalculator} className="rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50">Reset</button></div>
          </form>
          {result?.error && <p role="alert" className="mt-6 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{result.error}</p>}
          {result?.bmi && <div className={`mt-6 rounded-2xl border p-5 ${result.style}`} aria-live="polite"><p className="text-sm font-semibold">Your BMI result</p><div className="mt-1 flex items-end justify-between gap-4"><p className="text-4xl font-bold tracking-tight">{result.bmi}</p><p className="pb-1 text-sm font-bold">{result.category}</p></div><p className="mt-3 text-xs leading-5 opacity-80">BMI is a screening tool and does not diagnose health conditions.</p></div>}
        </div>
      </section>
    </main>
  );
}

export { BmiCal };
