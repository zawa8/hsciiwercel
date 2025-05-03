"use client";
import Image from "next/image";
import {  useState } from 'react';
import {Textarea} from "@heroui/input";
import {Button} from "@heroui/button";
import hsciistr from "hsciistr";
import { Hsciifontpicker } from "@/components/hscii/hsciifontpicker";
export default function Home() {
	const sampletkst = `test: select language binary/inglish4/... n see changes vere(here).
  x.com=xmericα=Americα=Aks.com
  zawa8.vercel.App is now muwed to ztr8.Vercel.app(new)
  whitehome=wvitevouse cαr=cAb=cxb
  ziro wn two three four fiwe siks sewen
  0123 4567 89LY VWPF . 4finger_mxths . 8+8=10=wnti=4*4
  eight nine ten twelwe dblu purn fiwn wnti`;
  const iplaceholer = `input: replace/paste here.ԃis is trαnsliterator for phonetical languages.
steps to use : 1. pls replace ԃis tekst to indiα/nepαl/sinhl/bαnglα.
1.1 to copy unicode google search : wiki indiα in indian languages
2. pls press eu2i btn.
3. result : tekst areα down.`;	
 const b3tekst = `jzqk+h<br>JZQK`;
  const hsciistrobz = new hsciistr("","ascii_and_indikutf","all");
  const [iteksta, set_iteksta] = useState("");
  const handle_ita_change = (event) => { set_iteksta(event.target.value); };
  function on_kh2uK() { set_iteksta(hsciistrobz.setistr(iteksta).kh2hindiK().istr); }
  function on_xvjqK2u() { set_iteksta(hsciistrobz.setistr(iteksta).xvjqK2hindi().istr); }
  function on_eu2l() {  //alert("on_eu2l");
    hsciistrobz.setistr(iteksta).duztr();
    let all_output  = "";
    for (const key in hsciistrobz.ostrdict) {
      all_output += `modern_${key}: ` + hsciistrobz.ostrdict[key] + " \n" ;
    }
    set_iteksta(all_output);
}
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 ]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="flex gap-2 items-center flex-col sm:flex-row"><Hsciifontpicker/></div>
        <div className="flex gap-1 items-center flex-col sm:flex-row">
			<button className="" onClick={on_eu2l}>
				<Image src="/flg8.png" alt="modern india languages" width={100} height={100}/>
			</button>
			<button onClick={on_xvjqK2u}
				className="bg-transparent hover:bg-green-500 text-green-700 hover:text-black border border-green hover:border-transparent w-[100px] h-[100px]">
				vwx QKD BS JTZ CG yrf lmn kztd pbs aiueohcg
			</button>
			<button onClick={on_kh2uK}
				className="bg-transparent hover:bg-green-500 text-green-700 hover:text-white border border-green-500 hover:border-transparent w-[100px] h-[100px]">
				(zjt kqd bcgp)+h=<br/>ZJT KQD BCGf
			</button>
			<a href="https://github.com/zawa8/font" target="_blank" rel="noopener noreferrer"
				className="bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white border border-blue-500 hover:border-transparent w-[100px] h-[100px]">
				hscii font 1.download 2.install set
			</a>
        </div>
        <div className="flex min-w-full gap-2 items-center flex-col sm:flex-row">
          <Textarea id="ita"  rows={12} className="w-full border-black" value={iteksta}  onChange={handle_ita_change} placeholder={iplaceholer} />
        </div>
      </main>
    </div>
  );
}
