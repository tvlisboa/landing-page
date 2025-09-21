import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { Question } from "./Question";

export function SectionQuestion() {
    return (
        <section className="pt-24">
            <GridContainer>
                <div className="text-center mb-16 space-y-5">
                    <h2 className="text-4xl font-semibold text-gray-900 -tracking-[0.70px]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae pariatur eius dolorem id consequuntur voluptas ipsam placeat fugiat reiciendis.</h2>
                    <p className="text-xl/6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam eius necessitatibus quia. Maxime, harum.</p>
                </div>
                <div className="w-full max-w-3xl mx-auto divide-y divide-red-300">

                    <Question
                        title="Is there a free trial available?"
                        response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque, mollitia rerum nulla aliquam voluptate dolore odit unde earum necessitatibus minima ipsum cupiditate placeat officia harum molestiae. Ab praesentium illo unde aperiam, sit harum. Aliquid sapiente dicta iure mollitia obcaecati." />

                    <Question
                        title="Can i change my plan later?"
                        response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque, mollitia rerum nulla aliquam voluptate dolore odit unde earum necessitatibus minima ipsum cupiditate placeat officia harum molestiae. Ab praesentium illo unde aperiam, sit harum. Aliquid sapiente dicta iure mollitia obcaecati." />

                    <Question
                        title="What is your cancellation policy?"
                        response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque, mollitia rerum nulla aliquam voluptate dolore odit unde earum necessitatibus minima ipsum cupiditate placeat officia harum molestiae. Ab praesentium illo unde aperiam, sit harum. Aliquid sapiente dicta iure mollitia obcaecati." />

                    <Question
                        title="Can other info be added to an invoice? "
                        response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque, mollitia rerum nulla aliquam voluptate dolore odit unde earum necessitatibus minima ipsum cupiditate placeat officia harum molestiae. Ab praesentium illo unde aperiam, sit harum. Aliquid sapiente dicta iure mollitia obcaecati." />

                    <Question
                        title="How does billing Work? "
                        response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque, mollitia rerum nulla aliquam voluptate dolore odit unde earum necessitatibus minima ipsum cupiditate placeat officia harum molestiae. Ab praesentium illo unde aperiam, sit harum. Aliquid sapiente dicta iure mollitia obcaecati." />

                    <Question
                        title="How do i change my accontu email?"
                        response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque, mollitia rerum nulla aliquam voluptate dolore odit unde earum necessitatibus minima ipsum cupiditate placeat officia harum molestiae. Ab praesentium illo unde aperiam, sit harum. Aliquid sapiente dicta iure mollitia obcaecati." />

                </div>

                <div className="mt-16 bg-red-50 rounded-2xl p-8 text-center">
                    <Image
                        src="/profilered.png"
                        alt="logousuariosred"
                        width={120}
                        height={60}
                        className="mx-auto" />
                </div>

                <h4 className="mt-8 mb-2 text-xl font-medium text-gray-900">Still have questions?</h4>
                <p className=" text-gray-600 text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quam saepe.</p>
                <button className="py-3 px-5 bg-red-600 rounded-lg text-white font-semibold leading-1.0 hover:bg-gray-700 transition-colors">Got it</button>
                <hr className="mt-24 border-gray-200" />
            </GridContainer>
        </section>
    )
}