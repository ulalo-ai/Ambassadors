import svgPaths from "./svg-s06l9n7l5g";
import imgImageWithFallback from "figma:asset/f1457afa0a87139648e78366a4e66a633eb27ca7.png";
import imgWhoCanBecome from "figma:asset/9536a7460b036e618fc0d3beb5046c2b9aca7d0a.png";
import imgWhoCanBecome1 from "figma:asset/0de260b66378634809a2d3509bf6f98ca1e17755.png";
import imgWhoCanBecome2 from "figma:asset/216658ceb0ce1d8589a7a6484cc82d1af89c7275.png";

function Group() {
  return (
    <div className="h-[27.356px] relative shrink-0 w-[26.106px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 28">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p965f80} fill="url(#paint0_linear_1_639)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p27a64700} fill="url(#paint1_linear_1_639)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p20e88680} fill="url(#paint2_linear_1_639)" fillRule="evenodd" id="Vector_3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_639" x1="18.1079" x2="18.1079" y1="0" y2="27.3559">
            <stop stopColor="#F4FEF7" />
            <stop offset="1" stopColor="#8DFFB6" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_639" x1="1.7043" x2="13.0662" y1="23.576" y2="3.87417e-07">
            <stop stopColor="#F4FEF7" />
            <stop offset="1" stopColor="#8DFFB6" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_639" x1="22.7238" x2="20.3667" y1="24.1441" y2="30.7766">
            <stop stopColor="#F4FEF7" />
            <stop offset="1" stopColor="#8DFFB6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function UlaloLogo() {
  return (
    <div className="relative shrink-0" data-name="Ulalo logo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[1.136px] items-center relative">
        <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[13.634px] not-italic relative shrink-0 text-[#f4f4f4] text-[36.358px] text-nowrap tracking-[-0.3636px] whitespace-pre">UL</p>
        <Group />
        <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[13.634px] not-italic relative shrink-0 text-[#f4f4f4] text-[36.358px] text-nowrap tracking-[-0.3636px] whitespace-pre">LO</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[24px] left-0 top-[8px] w-[42.885px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">Home</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[24px] left-[66.89px] top-[8px] w-[124.135px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">Rewards Program</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[24px] left-[215.02px] top-[8px] w-[56.063px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">Benefits</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[24px] left-[295.08px] top-[8px] w-[29.26px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">FAQ</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#35e467] h-[40px] left-[348.34px] rounded-[4px] top-0 w-[97.313px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[49px] not-italic text-[#384756] text-[16px] text-center text-nowrap top-[6.33px] translate-x-[-50%] whitespace-pre">Join Now</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[40px] relative shrink-0 w-[445.656px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[445.656px]">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Button />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UlaloLogo />
      <Navigation />
    </div>
  );
}

function Heading() {
  return (
    <div className="font-['Arial:Regular',sans-serif] h-[192px] leading-[48px] not-italic relative shrink-0 text-[48px] text-white w-full" data-name="Heading 1">
      <p className="absolute left-0 text-nowrap top-[-5px] whitespace-pre">Empower Patients.</p>
      <p className="absolute left-0 text-nowrap top-[43px] whitespace-pre">Champion Data Ownership.</p>
      <p className="absolute left-0 top-[91px] w-[564px]">Join the Ulalo Ambassador Network.</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#d1d5dc] text-[18px] top-[-1px] w-[575px]">Be a leader in the patient health revolution. Help patients take control of their medical information by introducing them to Ulalo.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[24px] size-[20px] top-[14.67px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #384756)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e91ee00} id="Vector_2" stroke="var(--stroke-0, #384756)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2e8b4900} id="Vector_3" stroke="var(--stroke-0, #384756)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_4" stroke="var(--stroke-0, #384756)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#35e467] h-[49.333px] left-0 rounded-[4px] top-0 w-[310.458px]" data-name="Button">
      <Icon />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[169.5px] not-italic text-[#384756] text-[16px] text-center text-nowrap top-[11px] translate-x-[-50%] whitespace-pre">Apply to Become an Ambassador</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[24px] size-[20px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 5.83398V17.5007" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25713000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute border-[0.667px] border-solid border-white h-[49.333px] left-[326.46px] rounded-[4px] top-0 w-[158.052px]" data-name="Button">
      <Icon1 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[92px] not-italic text-[16px] text-center text-nowrap text-white top-[10.33px] translate-x-[-50%] whitespace-pre">Learn More</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[49.333px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[353.333px] items-start left-0 top-[18.24px] w-[584px]" data-name="Container">
      <Heading />
      <Paragraph />
      <Container1 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[389.813px] left-[632px] rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[584px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgImageWithFallback} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[389.813px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <ImageWithFallback />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#384756] h-[638px] relative shrink-0 w-full" data-name="Hero">
      <div className="size-full flex justify-center">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[638px] items-start pb-0 pt-[64px] px-[32px] relative w-full max-w-[1280px]">
          <Container />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#384756] text-[30px] text-nowrap top-[-3px] whitespace-pre">What is the Ulalo Ambassador Network?</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1.67px] w-[532px]">The Ulalo Ambassador Network is an exclusive community of healthcare professionals, patient advocates, and engaged individuals passionate about empowering patients through data ownership.</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1.67px] w-[570px]">{`Ambassadors help spread awareness about Ulalo's mission, educate patients and providers, and create a more connected healthcare ecosystem. In return, enjoy exclusive perks and a rewarding partnership!`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[212px] items-start left-[38px] top-[51.19px] w-[584px]" data-name="Container">
      <Heading1 />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Icon">
          <path d={svgPaths.p15dee0a0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          <path d={svgPaths.p29d7c680} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          <path d={svgPaths.p11227800} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          <path d={svgPaths.p1c989f00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#35e467] content-stretch flex items-center justify-center left-[96px] rounded-[2.23696e+07px] size-[128px] top-[96px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#384756] left-[136px] rounded-[2.23696e+07px] size-[48px] top-[-24px]" data-name="Container" />;
}

function Container7() {
  return <div className="absolute bg-[#384756] left-[136px] rounded-[2.23696e+07px] size-[48px] top-[296px]" data-name="Container" />;
}

function Container8() {
  return <div className="absolute bg-[#384756] left-[-24px] rounded-[2.23696e+07px] size-[48px] top-[136px]" data-name="Container" />;
}

function Container9() {
  return <div className="absolute bg-[#384756] left-[296px] rounded-[2.23696e+07px] size-[48px] top-[136px]" data-name="Container" />;
}

function Container10() {
  return <div className="absolute bg-[#d1d5dc] left-[192px] rounded-[2.23696e+07px] size-[48px] top-[80px]" data-name="Container" />;
}

function Container11() {
  return <div className="absolute bg-[#d1d5dc] left-[80px] rounded-[2.23696e+07px] size-[48px] top-[192px]" data-name="Container" />;
}

function Container12() {
  return (
    <div className="absolute left-[764px] size-[320px] top-0" data-name="Container">
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function WhatIsSection() {
  return (
    <div className="bg-gray-50 h-[320px] relative shrink-0 w-full max-w-[1280px]" data-name="WhatIsSection">
      <Container4 />
      <Container12 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-1/2 not-italic text-[#384756] text-[30px] text-center text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">Who Can Become an Ambassador</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M11 2V4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 2V4" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p214dab00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pa441580} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2970f480} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#35e467] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[172.031px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[172.031px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Healthcare Professionals</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Heading2 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[6.5px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#35e467] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">•</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[14.5px] not-italic text-[#364153] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Physicians and Nurses</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[6.5px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#35e467] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">•</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text1 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[14.5px] not-italic text-[#364153] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Clinical Researchers</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[6.5px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#35e467] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">•</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text2 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[14.5px] not-italic text-[#364153] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Patient Advocates</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="[grid-area:1_/_1] h-[201.333px] justify-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[201.333px] items-start pb-[0.667px] pt-[24.667px] px-[24.667px] relative w-full">
          <Container14 />
          <List />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p27df2b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#35e467] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[125.969px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[125.969px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Patient Advocates</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Heading4 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[6.5px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#35e467] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">•</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text3 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[14.5px] not-italic text-[#364153] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Caregiver Ambassadors</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[6.5px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#35e467] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">•</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text4 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[14.5px] not-italic text-[#364153] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Support Group Leaders</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[6.5px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#35e467] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">•</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text5 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[14.5px] not-italic text-[#364153] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Patient Advocates</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container18() {
  return (
    <div className="[grid-area:1_/_2] h-[201.333px] justify-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[201.333px] items-start pb-[0.667px] pt-[24.667px] px-[24.667px] relative w-full">
          <Container17 />
          <List1 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M10 12H14" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 8H14" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p8dd9500} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3603ff00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p26acdf00} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#35e467] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[179.302px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[179.302px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Digital Health Enthusiasts</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Heading5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[6.5px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#35e467] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">•</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text6 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[14.5px] not-italic text-[#364153] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Health Tech Professionals</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[6.5px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#35e467] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">•</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text7 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[14.5px] not-italic text-[#364153] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Medical Innovators</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[6.5px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#35e467] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">•</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text8 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[14.5px] not-italic text-[#364153] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Telehealth Advocates</p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container21() {
  return (
    <div className="[grid-area:1_/_3] h-[201.333px] justify-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[201.333px] items-start pb-[0.667px] pt-[24.667px] px-[24.667px] relative w-full">
          <Container20 />
          <List2 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[201.333px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container18 />
      <Container21 />
    </div>
  );
}

function WhoCanBecome() {
  return (
    <div className="bg-white relative shrink-0 w-full max-w-[1280px]" data-name="WhoCanBecome">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-center pb-[48px] pt-[64px] px-[32px] relative w-full">
          <Heading3 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function WhoCanBecome1() {
  return (
    <div className="h-[413px] relative w-full overflow-hidden" data-name="WhoCanBecome">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgWhoCanBecome} />
        </div>
      </div>
      <div className="absolute bg-[#00ff0d] h-full inset-0 mix-blend-soft-light w-full" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-1/2 not-italic text-[#384756] text-[30px] text-center text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">What Ambassadors Do</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p5c66300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1de1e780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 6V14" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#35e467] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Outreach</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-1.33px] w-[266px]">Spread awareness on advertising Ulalo and engaging directly with potential users at healthcare events, conferences, and in your personal network.</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="basis-0 grow h-[112px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[112px] items-start relative w-full">
        <Heading7 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[16px] h-[112px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[161.333px] items-start left-0 pb-[0.667px] pt-[24.667px] px-[24.667px] rounded-[10px] top-0 w-[389.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container25 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3a2d1a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p290131c0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#35e467] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Community</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-1.33px] w-[274px]">Foster a supportive network by connecting patients, users, and advocates. Help patients feel supported as they navigate health data ownership.</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 grow h-[112px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[112px] items-start relative w-full">
        <Heading8 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[16px] h-[112px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[161.333px] items-start left-[413.33px] pb-[0.667px] pt-[24.667px] px-[24.667px] rounded-[10px] top-0 w-[389.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container29 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p35edaa00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p295d6220} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 3L22 14H20" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1021cb40} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 4H11" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#35e467] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Partnerships</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-1.33px] w-[263px]">Develop strategic partnerships with hospitals, clinics, and other organizations. Connect Ulalo to communities with shared public health missions.</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="basis-0 grow h-[112px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[112px] items-start relative w-full">
        <Heading9 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[16px] h-[112px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[161.333px] items-start left-[826.67px] pb-[0.667px] pt-[24.667px] px-[24.667px] rounded-[10px] top-0 w-[389.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container33 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb47f400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17a13100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 9H8" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 13H8" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 17H8" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#35e467] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Content</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-1.33px] w-[275px]">Create engaging educational content (blogs, social posts, videos, webinars) highlighting our mission and the benefits of data ownership.</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="basis-0 grow h-[112px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[112px] items-start relative w-full">
        <Heading10 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[16px] h-[112px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[161.333px] items-start left-0 pb-[0.667px] pt-[24.667px] px-[24.667px] rounded-[10px] top-[185.33px] w-[389.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container37 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M16 7H22V13" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13253c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#35e467] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Tracking and Reporting</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-1.33px] w-[261px]">Track your activity and report outcomes to help Ulalo understand the impact of your work. Use data to optimize your strategies for success.</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="basis-0 grow h-[112px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[112px] items-start relative w-full">
        <Heading11 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[16px] h-[112px] items-start relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[161.333px] items-start left-[413.33px] pb-[0.667px] pt-[24.667px] px-[24.667px] rounded-[10px] top-[185.33px] w-[389.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[346.667px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container30 />
      <Container34 />
      <Container38 />
      <Container42 />
    </div>
  );
}

function WhatAmbassadorsDo() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex flex-col gap-[48px] items-center p-[32px] relative shrink-0 w-full max-w-[1280px]" data-name="WhatAmbassadorsDo">
      <Heading6 />
      <Container43 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-[36px] left-[53px] top-[64px] w-[1216px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-1/2 not-italic text-[#384756] text-[30px] text-center text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">Rewards, Tiers, and Growth</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[24px] left-[53px] top-[116px] w-[1216px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-1/2 not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">The Ulalo Ambassador Network is structured to reward your engagement and outcomes. Progress through tiers and unlock greater rewards!</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#bb4d00] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[118.45px] not-italic text-[16px] text-center text-nowrap text-white top-[6.33px] translate-x-[-50%] whitespace-pre">Bronze</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[10.49px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#35e467] text-[14px] text-nowrap top-[-1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Text9 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[18.49px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Exclusive training resources</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[10.49px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#35e467] text-[14px] text-nowrap top-[-1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Text10 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[18.49px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Ambassador certificate</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[10.49px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#35e467] text-[14px] text-nowrap top-[-1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Text11 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[18.49px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Networking opportunities</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[10.49px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#35e467] text-[14px] text-nowrap top-[-1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Text12 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[18.49px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Recognition</p>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[237.333px] items-start left-0 pb-[0.667px] pt-[24.667px] px-[24.667px] rounded-[10px] top-0 w-[286px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container44 />
      <List3 />
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#99a1af] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[118.91px] not-italic text-[16px] text-center text-nowrap text-white top-[6.33px] translate-x-[-50%] whitespace-pre">Silver</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[10.49px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#35e467] text-[14px] text-nowrap top-[-1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Text13 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[18.49px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">All Bronze benefits</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[10.49px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#35e467] text-[14px] text-nowrap top-[-1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Text14 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[18.49px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Priority support</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[10.49px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#35e467] text-[14px] text-nowrap top-[-1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Text15 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[18.49px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Co-marketing opportunities</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[10.49px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#35e467] text-[14px] text-nowrap top-[-1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Text16 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[18.49px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Event invitations</p>
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
      <ListItem16 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[237.333px] items-start left-[310px] pb-[0.667px] pt-[24.667px] px-[24.667px] rounded-[10px] top-0 w-[286px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container46 />
      <List4 />
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#dac642] h-[42px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[124.58px] not-italic text-[16px] text-center text-nowrap text-white top-[6.8px] translate-x-[-50%] whitespace-pre">Gold</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[11.014px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#dac642] text-[14px] text-nowrap top-[-1.3px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[248.5px]" data-name="List Item">
      <Text17 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[19.41px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.3px] whitespace-pre">All Silver benefits</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[11.014px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#dac642] text-[14px] text-nowrap top-[-1.3px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="absolute h-[21px] left-0 top-[29.4px] w-[248.5px]" data-name="List Item">
      <Text18 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[19.41px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.3px] whitespace-pre">Revenue sharing</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[11.014px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#dac642] text-[14px] text-nowrap top-[-1.3px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="absolute h-[21px] left-0 top-[58.8px] w-[248.5px]" data-name="List Item">
      <Text19 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[19.41px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.3px] whitespace-pre">Speaking opportunities</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[11.014px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#dac642] text-[14px] text-nowrap top-[-1.3px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="absolute h-[21px] left-0 top-[88.2px] w-[248.5px]" data-name="List Item">
      <Text20 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[19.41px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.3px] whitespace-pre">Advisory board access</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[11.014px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#dac642] text-[14px] text-nowrap top-[-1.3px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="absolute h-[21px] left-0 top-[117.6px] w-[248.5px]" data-name="List Item">
      <Text21 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[19.41px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.3px] whitespace-pre">Premium tools</p>
    </div>
  );
}

function List5() {
  return (
    <div className="h-[138.6px] relative shrink-0 w-full" data-name="List">
      <ListItem17 />
      <ListItem18 />
      <ListItem19 />
      <ListItem20 />
      <ListItem21 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col gap-[16.8px] h-[249.2px] items-start left-[612.85px] pb-[0.667px] pt-[25.9px] px-[25.9px] rounded-[10px] top-[-5.93px] w-[300.3px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dac642] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container48 />
      <List5 />
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#c27aff] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[118.75px] not-italic text-[16px] text-center text-nowrap text-white top-[6.33px] translate-x-[-50%] whitespace-pre">Platinum</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[10.49px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#35e467] text-[14px] text-nowrap top-[-1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Text22 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[18.49px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">All Gold benefits</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[10.49px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#35e467] text-[14px] text-nowrap top-[-1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Text23 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[18.49px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Partnership development</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[10.49px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#35e467] text-[14px] text-nowrap top-[-1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Text24 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[18.49px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Custom solutions</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[10.49px]" data-name="Text">
      <p className="absolute font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#35e467] text-[14px] text-nowrap top-[-1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function ListItem25() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Text25 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[18.49px] not-italic text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Executive access</p>
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem22 />
      <ListItem23 />
      <ListItem24 />
      <ListItem25 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[237.333px] items-start left-[930px] pb-[0.667px] pt-[24.667px] px-[24.667px] rounded-[10px] top-0 w-[286px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container50 />
      <List6 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[237.333px] left-[53px] top-[188px] w-[1216px]" data-name="Container">
      <Container45 />
      <Container47 />
      <Container49 />
      <Container51 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.pb07e280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p1113bc00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p2b496300} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M8 44H40" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p34f2bd80} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p17973280} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[-2.33px] whitespace-pre">Top Performance Pool</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-1.67px] w-[1079px]">The top performers from the Gold and Platinum tiers are eligible to join our annual performance pool. Ambassadors share in a monetary bonus based on measurable outcomes like patient sign-ups, partnerships created, content engagement, and more.</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="basis-0 grow h-[84px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[84px] items-start relative w-full">
        <Heading13 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[16px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon11 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[#35e467] box-border content-stretch flex flex-col h-[148px] items-start left-[53px] pb-0 pt-[32px] px-[32px] rounded-[10px] top-[473.33px] w-[1216px]" data-name="Container">
      <Container54 />
    </div>
  );
}

function RewardsTiers() {
  return (
    <div className="bg-white h-[685.333px] relative shrink-0 w-full max-w-[1280px]" data-name="RewardsTiers">
      <Heading12 />
      <Paragraph8 />
      <Container52 />
      <Container55 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-1/2 not-italic text-[#384756] text-[30px] text-center text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">Tools and Support You Get</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-1/2 not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">We provide ambassadors with everything you need to succeed.</p>
    </div>
  );
}

function TrainingCenterSvgrepoCom() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="training-center_svgrepo.com">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_628)" id="training-center_svgrepo.com">
          <path d={svgPaths.p304e93f0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2692c780} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_628">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#35e467] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <TrainingCenterSvgrepoCom />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Exclusive Training Portal</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-1.33px] w-[470px]">Access in-depth courses, webinars, and certification programs to become an expert on Ulalo and health data ownership.</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[72px] items-start relative w-full">
        <Heading15 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[121.333px] items-start left-0 pb-[0.667px] pt-[24.667px] px-[24.667px] rounded-[10px] top-0 w-[596px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container58 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M16 7H22V13" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13253c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#35e467] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon12 />
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">{`Marketing & Outreach Kit`}</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-1.33px] w-[462px]">Utilize pre-made content, templates, and social media graphics. Access our brand guidelines and promotional materials.</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[72px] items-start relative w-full">
        <Heading16 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[121.333px] items-start left-[620px] pb-[0.667px] pt-[24.667px] px-[24.667px] rounded-[10px] top-0 w-[596px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container62 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2edd0f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[#35e467] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon13 />
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Dedicated Support Team</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-1.33px] w-[422px]">Work directly with our ambassador coordination team. Get help with questions, event planning, and technical support.</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[72px] items-start relative w-full">
        <Heading17 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[121.333px] items-start left-0 pb-[0.667px] pt-[24.667px] px-[24.667px] rounded-[10px] top-[145.33px] w-[596px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container66 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p51c6380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 2L11.4 11.6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pff86670} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-[#35e467] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon14 />
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Early Platform Access</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-1.33px] w-[426px]">Be the first to experience new features and updates. Provide valuable feedback to help shape the future of Ulalo.</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[72px] items-start relative w-full">
        <Heading18 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[121.333px] items-start left-[620px] pb-[0.667px] pt-[24.667px] px-[24.667px] rounded-[10px] top-[145.33px] w-[596px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container70 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[266.667px] relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container63 />
      <Container67 />
      <Container71 />
    </div>
  );
}

function ToolsSupport() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex flex-col gap-[16px] items-start p-[32px] relative shrink-0 w-full max-w-[1280px]" data-name="ToolsSupport">
      <Heading14 />
      <Paragraph10 />
      <Container72 />
    </div>
  );
}

function WhoCanBecome2() {
  return (
    <div className="h-[413px] relative rounded-[24px] shrink-0 w-full max-w-[1280px]" data-name="WhoCanBecome">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-white inset-0 rounded-[24px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[24px]">
          <img alt="" className="absolute h-[212.79%] left-[-4.81%] max-w-none top-[-56.4%] w-[109.62%] object-cover" src={imgWhoCanBecome1} />
        </div>
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-1/2 not-italic text-[#384756] text-[30px] text-center text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">How the Program Works</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[#35e467] relative rounded-[2.23696e+07px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[64px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[112.083px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[112.083px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[56px] not-italic text-[#384756] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">{`Apply & Qualify`}</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[280px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[140.41px] not-italic text-[#364153] text-[14px] text-center top-[-1.33px] translate-x-[-50%] w-[272px]">Submit your application and tell us about your passion for patient empowerment. Our team will review and approve qualified candidates.</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[192px] items-center left-0 top-0 w-[280px]" data-name="Container">
      <Container73 />
      <Heading20 />
      <Paragraph15 />
    </div>
  );
}

function Container75() {
  return <div className="absolute bg-[#d1d5dc] h-[2px] left-[172px] top-[32px] w-[216px]" data-name="Container" />;
}

function Container76() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="basis-0 bg-[#35e467] grow min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center relative w-[64px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[118.219px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[118.219px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[59px] not-italic text-[#384756] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">{`Onboard & Train`}</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[60px] relative shrink-0 w-[280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[60px] relative w-[280px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[140.19px] not-italic text-[#364153] text-[14px] text-center top-[-1.33px] translate-x-[-50%] w-[279px]">Complete our comprehensive training program. Learn about Ulalo, our mission, and best practices for ambassadorship.</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[172px] items-center left-0 top-0 w-[280px]" data-name="Container">
      <Container77 />
      <Heading21 />
      <Paragraph16 />
    </div>
  );
}

function Container79() {
  return <div className="absolute bg-[#d1d5dc] h-[2px] left-[172px] top-[32px] w-[216px]" data-name="Container" />;
}

function Container80() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative shrink-0" data-name="Container">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-[#35e467] relative rounded-[2.23696e+07px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[64px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Heading22() {
  return (
    <div className="h-[24px] relative shrink-0 w-[122.469px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[122.469px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[61.5px] not-italic text-[#384756] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">{`Engage & Impact`}</p>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[280px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[140.47px] not-italic text-[#364153] text-[14px] text-center top-[-1.33px] translate-x-[-50%] w-[266px]">Begin your work as an ambassador. Spread awareness, build partnerships, create content, and help patients take control of their data.</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[192px] items-center left-0 top-0 w-[280px]" data-name="Container">
      <Container81 />
      <Heading22 />
      <Paragraph17 />
    </div>
  );
}

function Container83() {
  return <div className="absolute bg-[#d1d5dc] h-[2px] left-[172px] top-[32px] w-[216px]" data-name="Container" />;
}

function Container84() {
  return (
    <div className="[grid-area:1_/_3] place-self-stretch relative shrink-0" data-name="Container">
      <Container82 />
      <Container83 />
    </div>
  );
}

function Container85() {
  return (
    <div className="basis-0 bg-[#35e467] grow min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center relative w-[64px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Heading23() {
  return (
    <div className="h-[24px] relative shrink-0 w-[89.906px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[89.906px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[45px] not-italic text-[#384756] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">{`Earn & Grow`}</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[60px] relative shrink-0 w-[280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[60px] relative w-[280px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[140.27px] not-italic text-[#364153] text-[14px] text-center top-[-1.33px] translate-x-[-50%] w-[269px]">Track your outcomes, earn rewards, and advance through tiers. Celebrate your contributions to a better healthcare system.</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[16px] h-[172px] items-center justify-self-stretch relative shrink-0" data-name="Container">
      <Container85 />
      <Heading23 />
      <Paragraph18 />
    </div>
  );
}

function Container87() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[192px] relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Container80 />
      <Container84 />
      <Container86 />
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="bg-white h-[404px] relative shrink-0 w-full max-w-[1280px]" data-name="HowItWorks">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[404px] items-center pb-0 pt-[64px] px-[32px] relative w-full">
          <Heading19 />
          <Container87 />
        </div>
      </div>
    </div>
  );
}

function WhoCanBecome3() {
  return (
    <div className="h-[413.333px] relative shrink-0 w-full" data-name="WhoCanBecome">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[179.88%] left-0 max-w-none top-[-66.18%] w-full" src={imgWhoCanBecome2} />
        </div>
      </div>
      <div className="size-full">
        <div className="h-[413.333px] w-full" />
      </div>
    </div>
  );
}

function Heading24() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-1/2 not-italic text-[#384756] text-[30px] text-center text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">Code of Conduct</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pd6d0500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute bg-[#35e467] content-stretch flex items-center justify-center left-[119px] rounded-[2.23696e+07px] size-[48px] top-[24.67px]" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="absolute h-[24px] left-[24.67px] top-[88.67px] w-[236.667px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[117.93px] not-italic text-[#384756] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">{`Integrity & Honesty`}</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[40px] left-[24.67px] top-[120.67px] w-[236.667px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[118.55px] not-italic text-[#364153] text-[14px] text-center top-[-1.33px] translate-x-[-50%] w-[223px]">Represent Ulalo truthfully and transparently in all communications.</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[185.333px] justify-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container88 />
      <Heading25 />
      <Paragraph19 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3a2d1a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p290131c0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute bg-[#35e467] content-stretch flex items-center justify-center left-[119px] rounded-[2.23696e+07px] size-[48px] top-[24.67px]" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="absolute h-[24px] left-[24.67px] top-[88.67px] w-[236.667px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[118.63px] not-italic text-[#384756] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">{`Respect & Inclusivity`}</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[40px] left-[24.67px] top-[120.67px] w-[236.667px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[118.69px] not-italic text-[#364153] text-[14px] text-center top-[-1.33px] translate-x-[-50%] w-[224px]">Treat all individuals with respect and promote an inclusive environment.</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="[grid-area:1_/_2] bg-white h-[185.333px] justify-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container90 />
      <Heading26 />
      <Paragraph20 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p27df2b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute bg-[#35e467] content-stretch flex items-center justify-center left-[119px] rounded-[2.23696e+07px] size-[48px] top-[24.67px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Heading27() {
  return (
    <div className="absolute h-[24px] left-[24.67px] top-[88.67px] w-[236.667px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[119.03px] not-italic text-[#384756] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Patient-First Approach</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[40px] left-[24.67px] top-[120.67px] w-[236.667px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[118.76px] not-italic text-[#364153] text-[14px] text-center top-[-1.33px] translate-x-[-50%] w-[227px]">Always prioritize the needs and well-being of patients.</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="[grid-area:1_/_3] bg-white h-[185.333px] justify-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container92 />
      <Heading27 />
      <Paragraph21 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2dfab7c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c300c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute bg-[#35e467] content-stretch flex items-center justify-center left-[119px] rounded-[2.23696e+07px] size-[48px] top-[24.67px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Heading28() {
  return (
    <div className="absolute h-[24px] left-[24.67px] top-[88.67px] w-[236.667px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[119.3px] not-italic text-[#384756] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Accuracy of Information</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[40px] left-[24.67px] top-[120.67px] w-[236.667px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[118.75px] not-italic text-[#364153] text-[14px] text-center top-[-1.33px] translate-x-[-50%] w-[221px]">Ensure all information shared about Ulalo is accurate and up-to-date.</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="[grid-area:1_/_4] bg-white h-[185.333px] justify-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container94 />
      <Heading28 />
      <Paragraph22 />
    </div>
  );
}

function Container96() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[185.333px] relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <Container91 />
      <Container93 />
      <Container95 />
    </div>
  );
}

function CodeOfConduct() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex flex-col gap-[48px] items-center p-[32px] relative shrink-0 w-full max-w-[1280px]" data-name="CodeOfConduct">
      <Heading24 />
      <Container96 />
    </div>
  );
}

function Heading29() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-1/2 not-italic text-[#384756] text-[30px] text-center text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">FAQ</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[217.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[217.469px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">What is the time commitment?</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[72px] items-center justify-between px-[24px] py-0 relative w-full">
          <Text26 />
          <Icon19 />
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[73.333px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[73.333px] items-start p-[0.667px] relative w-full">
          <Button3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[24px] relative shrink-0 w-[516.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[516.438px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">How are my ambassadors payments structured in exchange for activities?</p>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[72px] items-center justify-between px-[24px] py-0 relative w-full">
          <Text27 />
          <Icon20 />
        </div>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[73.333px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[73.333px] items-start p-[0.667px] relative w-full">
          <Button4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[339.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[339.25px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">{`Can I be an ambassador if I'm not in healthcare?`}</p>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[72px] items-center justify-between px-[24px] py-0 relative w-full">
          <Text28 />
          <Icon21 />
        </div>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[73.333px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[73.333px] items-start p-[0.667px] relative w-full">
          <Button5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[252px] items-start relative shrink-0 w-full" data-name="Container">
      <Container97 />
      <Container98 />
      <Container99 />
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-white h-[464px] relative shrink-0 w-full max-w-[1280px]" data-name="FAQ">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[464px] items-center pb-0 pt-[64px] px-[32px] relative w-full">
          <Heading29 />
          <Container100 />
        </div>
      </div>
    </div>
  );
}

function Heading30() {
  return (
    <div className="absolute h-[36px] left-[32px] top-[36.63px] w-[704px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-1/2 not-italic text-[#384756] text-[30px] text-center text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">Ambassador Application / Contact Form</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[88.63px] w-[704px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-1/2 not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Ready to make an impact? Fill out the form below to apply to become a Ulalo Ambassador.</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Full Name *</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[41.333px] relative rounded-[4px] shrink-0 w-full" data-name="Text Input">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container101() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] h-[73.333px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Email Address *</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="h-[41.333px] relative rounded-[4px] shrink-0 w-full" data-name="Email Input">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container102() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] h-[73.333px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Label1 />
      <EmailInput />
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[73.333px] left-[32px] top-[32px] w-[640px]" data-name="Container">
      <Container101 />
      <Container102 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Phone Number</p>
    </div>
  );
}

function PhoneInput() {
  return (
    <div className="h-[41.333px] relative rounded-[4px] shrink-0 w-full" data-name="Phone Input">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container104() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] h-[73.333px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Label2 />
      <PhoneInput />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Location</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="h-[41.333px] relative rounded-[4px] shrink-0 w-full" data-name="Text Input">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container105() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] h-[73.333px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Label3 />
      <TextInput1 />
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[73.333px] left-[32px] top-[129.33px] w-[640px]" data-name="Container">
      <Container104 />
      <Container105 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">What is your current role or profession? *</p>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-341px] size-0 top-[-4925.81px]" data-name="Option" />;
}

function Option1() {
  return (
    <div className="absolute left-[-341px] size-0 top-[-4925.81px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-[-367px] not-italic text-[16px] text-neutral-950 top-[133.85px] w-0">Other</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      {[...Array(4).keys()].map((_, i) => (
        <Option key={i} />
      ))}
      <Option1 />
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[72px] items-start left-[32px] top-[226.67px] w-[640px]" data-name="Container">
      <Label4 />
      <Dropdown />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Why do you want to become a Ulalo Ambassador? *</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[113.333px] relative rounded-[4px] shrink-0 w-full" data-name="Text Area">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[150.667px] items-start left-[32px] top-[322.67px] w-[640px]" data-name="Container">
      <Label5 />
      <TextArea />
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">Tell us about your experience with patient advocacy, healthcare, or community outreach.</p>
    </div>
  );
}

function TextArea1() {
  return (
    <div className="h-[113.333px] relative rounded-[4px] shrink-0 w-full" data-name="Text Area">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[150.667px] items-start left-[32px] top-[497.33px] w-[640px]" data-name="Container">
      <Label6 />
      <TextArea1 />
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#384756] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">How did you hear about the Ulalo Ambassador Network?</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="h-[41.333px] relative rounded-[4px] shrink-0 w-full" data-name="Text Input">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[73.333px] items-start left-[32px] top-[672px] w-[640px]" data-name="Container">
      <Label7 />
      <TextInput2 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[32px] size-[20px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_621)" id="Icon">
          <path d={svgPaths.p39e8baf0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p8bd79c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_621">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#35e467] h-[48px] left-[238.72px] rounded-[4px] top-[769.33px] w-[226.563px]" data-name="Button">
      <Icon22 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[127px] not-italic text-[16px] text-center text-nowrap text-white top-[10.33px] translate-x-[-50%] whitespace-pre">Submit Application</p>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute bg-white h-[849.333px] left-[32px] rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[160.63px] w-[704px]" data-name="Form">
      <Container103 />
      <Container106 />
      <Container107 />
      <Container108 />
      <Container109 />
      <Container110 />
      <Button6 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[18.667px] items-start left-[346.19px] top-[0.67px] w-[153.969px]" data-name="Link">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#35e467] text-[14px] text-center text-nowrap whitespace-pre">ambassadors@ulalo.com</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[263.5px] not-italic text-[#4a5565] text-[14px] text-center text-nowrap top-[0.37px] translate-x-[-50%] whitespace-pre">Questions? Email us at</p>
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[24px] left-[173.46px] top-0 w-[94.344px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[47px] not-italic text-[#384756] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute h-[24px] left-[283.8px] top-0 w-[3.833px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[2.5px] not-italic text-[#99a1af] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">|</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[24px] left-[303.64px] top-0 w-[114.198px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[57px] not-italic text-[#384756] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Terms of Service</p>
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute h-[24px] left-[433.83px] top-0 w-[3.833px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[2.5px] not-italic text-[#99a1af] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">|</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[24px] left-[453.67px] top-0 w-[76.875px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[38px] not-italic text-[#384756] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Contact Us</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Link5 />
      <Text29 />
      <Link6 />
      <Text30 />
      <Link7 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-1/2 not-italic text-[#4a5565] text-[14px] text-center text-nowrap top-[-1.33px] translate-x-[-50%] whitespace-pre">© 2025 Ulalo. All rights reserved.</p>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[96px] items-start left-[32px] top-[1041.96px] w-[704px]" data-name="Container">
      <Paragraph24 />
      <Container111 />
      <Paragraph25 />
    </div>
  );
}

function ApplicationForm() {
  return (
    <div className="bg-gray-50 h-[1185px] relative shrink-0 w-full max-w-[1280px] flex flex-col items-center" data-name="ApplicationForm">
      <div className="w-[768px] relative">
        <Heading30 />
        <Paragraph23 />
        <Form />
        <Container112 />
      </div>
    </div>
  );
}

export default function Ambassador() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Ambassador">
      <Hero />
      <div className="w-full mt-[116px] flex justify-center px-4 sm:px-6 lg:px-10">
        <WhatIsSection />
      </div>
      <div className="w-full mt-[80px] flex justify-center px-4 sm:px-6 lg:px-10">
        <WhoCanBecome />
      </div>
      <div className="w-full -mt-[1px]">
        <WhoCanBecome1 />
      </div>
      <div className="w-full mt-[116px] flex justify-center px-4 sm:px-6 lg:px-10">
        <WhatAmbassadorsDo />
      </div>
      <div className="w-full mt-[116px] flex justify-center px-4 sm:px-6 lg:px-10">
        <RewardsTiers />
      </div>
      <div className="w-full mt-[116px] flex justify-center px-4 sm:px-6 lg:px-10">
        <ToolsSupport />
      </div>
      <div className="w-full mt-[116px] flex justify-center px-4 sm:px-6 lg:px-10">
        <WhoCanBecome2 />
      </div>
      <div className="w-full mt-[116px] flex justify-center px-4 sm:px-6 lg:px-10">
        <HowItWorks />
      </div>
      <div className="w-full mt-[116px]">
        <WhoCanBecome3 />
      </div>
      <div className="w-full mt-[116px] flex justify-center px-4 sm:px-6 lg:px-10">
        <CodeOfConduct />
      </div>
      <div className="w-full mt-[116px] flex justify-center px-4 sm:px-6 lg:px-10">
        <Faq />
      </div>
      <div className="w-full mt-[116px] mb-[116px] flex justify-center px-4 sm:px-6 lg:px-10">
        <ApplicationForm />
      </div>
    </div>
  );
}