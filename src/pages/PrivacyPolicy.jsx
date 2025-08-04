import React from "react";

const PrivacyPolicy = () => {

    const tableData = [
        {
            purpose:
                "To provide you with our products and services and administer your account in relation to such products and services, in particular to process your transactions, subscriptions, and registration for our products and services – in accordance with your agreements with us",
            legalBasis: "Entering into and performing a contract",
        },
        {
            purpose:
                "To process your transactions, subscriptions and registration for products and services of third parties",
            legalBasis: "Entering into and performing a contract",
        },
        {
            purpose:
                "To detect, investigate and prevent fraud, to maintain the security of our systems, to protect our property and safety as well as property and safety of our employees",
            legalBasis: "Legitimate interests",
        },
        {
            purpose:
                "To conduct research and statistical analysis in order to improve and develop our business, products, and services",
            legalBasis: "Legitimate interests",
        },
        {
            purpose:
                "To provide you marketing information about our Group products and services as well as relevant third-party products and services:",
            legalBasis: "Consent / Legitimate interests",
            subPoints: [
                "by using direct marketing;",
                "by adapting our websites, offers, and advertising to your interests;",
                "by other means, such as advertising on websites.",
            ],
        },
        {
            purpose:
                "To comply with applicable EU laws and regulations, in particular regulatory and anti-money laundering obligations",
            legalBasis: "Compliance with a legal obligation",
        },
        {
            purpose:
                "To comply with applicable non-EU laws and regulations, in particular regulatory and anti-money laundering obligations",
            legalBasis: "Legitimate interests",
        },
        {
            purpose: "To protect our rights and the rights of our employees",
            legalBasis: "Legitimate interests",
        },
    ];
    return (
        <>
            <div className="max-w-[1170px] mx-auto p-6 text-white">
                <h1 className="text-5xl  font-semibold text-left mb-8">Privacy policy</h1>
                <h2 className="text-2xl font-semibold mb-6">Privacy and cookies policy</h2>

                <ol className="list-decimal pl-6  text-lg">
                    <li>Introduction</li>
                    <li>Purposes and legal bases for processing</li>
                    <li>Direct Marketing</li>
                    <li>Recipients of the personal data</li>
                    <li>How We Use Cookies</li>
                    <li>Retention of data</li>
                    <li>Access and Correction of Personal Data</li>
                    <li>Your rights under the GDPR</li>
                    <li>General/Contact</li>
                    <li>Representative in European Union</li>
                </ol>

                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4">1. Introduction</h3>
                    <p className="text-base leading-relaxed mb-4">
                        DGMARQ.COM Limited with its registered office at 31/F, Tower Two, Times
                        Square, 1 Matheson Street, Causeway Bay, Hongkong,{" "}
                        <a
                            href="#"
                            className="text-blue-600 underline"
                        >
                            https://www.DGMARQ.co/contact/
                        </a>{" "}
                        and from time to time, its subsidiaries (together the “Group”) (and
                        each being “DGMARQ.COM”, “we”, “us” or “member of the Group” for the
                        purposes of this Privacy Policy as appropriate) recognise their
                        responsibilities in relation to the collection, holding, processing,
                        use and/or transfer of personal data under the Personal Data
                        (Privacy) Ordinance (Cap. 486) (“PDPO”) and under the General Data
                        Protection Regulation (“GDPR”), [with regard to offering services to
                        persons in the European Union]. Personal data will be collected only
                        for lawful and relevant purposes and all practicable steps will be
                        taken to ensure that personal data held by us is accurate. We will use
                        your personal data which we may from time to time collect in
                        accordance with this Privacy Policy.
                    </p>
                    <p className="text-base leading-relaxed">
                        We regularly review this Privacy Policy and may from time to time
                        revise it or add specific instructions, policies and terms. Where any
                        changes to this Privacy Policy are material, we will notify you using
                        the contact details you have provided us with and, where required by
                        the law, we will give you the opportunity to opt out of these changes
                        by means notified to you at that time. Otherwise, in relation to
                        personal data supplied to us through the DGMARQ.COM website or
                        otherwise, continued use by you of the DGMARQ.COM website, or other
                        products or services of the Group, or your continued relationship with
                        us or the Group shall be deemed to be your acceptance of and consent
                        to this Privacy Policy, as amended from time to time.
                    </p>

                    <p className="text-base leading-relaxed">
                        DGMARQ.COM Limited and DGMARQ PL sp. z o.o. with its registered office in Warsaw (00-113), ul. Emilii Plater 53, Poland, are co-controllers of your personal data. DGMARQ PL sp. z o.o. has been also appointed to represent DGMARQ with regard to its respective obligations and your rights under the GDPR and according to agreement on co-controlling is responsible for exercising your rights described below.


                    </p>
                    <p className="text-base pt-2 leading-relaxed">
                        If you have any questions about this Privacy Policy or how we use your personal data, please contact us through one of the communication channels set out in the “Contact Us” section below.



                    </p>

                    <p className="text-base pt-2 leading-relaxed">
                        DGMARQ.COM will take all practicable steps to ensure the security of your personal data and to avoid unauthorised or accidental access, erasure or other use of your personal data. This includes physical, technical and procedural security methods, where appropriate, to ensure that your personal data may only be accessed by authorised personnel.




                    </p>

                    <p className="text-base pt-2 leading-relaxed">
                        DGMARQ.COM will take all practicable steps to ensure the security of your personal data and to avoid unauthorised or accidental access, erasure or other use of your personal data. This includes physical, technical and procedural security methods, where appropriate, to ensure that your personal data may only be accessed by authorised personnel.




                    </p>
                    <p className="text-base pt-2 leading-relaxed">
                        Please note that if you do not provide us with your personal data (or relevant personal data relating to persons appointed by you to act on your behalf) we may not be able to provide the information, products or services you have asked for or be able to process your requests. Where we need your personal data to enter into or perform a contract, we will mark the required information with an asterisk]. In some cases you may be legally obliged to provide your personal data – we will indicate this when collecting the data.





                    </p>


                    <p className="text-base  pt-2 leading-relaxed">
                        From time to time we may collect your personal data including but not limited to your name, mailing address, telephone number, email address, date of birth, login name, payment instrument and transaction details and unique identifiers assigned to you for the following purposes:







                    </p>

                    <h2 className="text-2xl font-bold mb-6 pt-4 text-center">
                        Legal Basis for Data Processing
                    </h2>
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-4 text-black text-left">Purpose</th>
                                <th className="border border-gray-300 p-4 text-black text-left">
                                    Legal Basis for Processing
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <React.Fragment key={index}>
                                    <tr>
                                        <td className="border border-gray-300 p-4 align-top">
                                            {row.purpose}
                                            {row.subPoints && (
                                                <ul className="list-disc pl-6 mt-2">
                                                    {row.subPoints.map((point, idx) => (
                                                        <li key={idx}>{point}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </td>
                                        <td className="border border-gray-300 p-4 align-top">
                                            {row.legalBasis}
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>

                    <p className="text-sm text-gray-700 mt-6">
                        From time to time we may also collect personal data from other sources
                        that the data subject – for example when we identify beneficial owners
                        within AML processes or if you provide us personal data of other
                        persons. In many cases providing information included in this policy to
                        such persons proves impossible or would involve a disproportionate
                        effort. We appreciate it if you may help us to be transparent to such
                        persons on processing of their data. Such data are not used for
                        marketing purposes.
                    </p>




                    <h3 className="text-2xl font-semibold mb-6 pt-2">3. Direct Marketing</h3>
                    <p className="text-base leading-relaxed mb-4">
                        Where you have given your consent and have not subsequently opted out, we may also use your name, mailing address, telephone number and email address to send promotional materials to you and conduct direct marketing activities in relation to DGMARQ.COM products and services, and products services offered by other members of the Group, or products and services offered by relevant third-parties.


                    </p>
                    <p className="text-base leading-relaxed">
                        If you do not wish to receive any promotional and direct marketing materials or do not wish to receive specific types of promotional and direct marketing materials or do not wish to receive such materials through a specific means of communication, you can unsubscribe or change your settings by clicking the link provided in the marketing materials you receive. You can also unsubscribe here [link] or contact us through one of the communication channels set out in the “Contact Us” section below.


                    </p>

                    <p className="text-base leading-relaxed">
                        Where you have given your consent and have not subsequently opted out, we may also collect information about what is watched and bought by you, at what price, in what amount or whether did you add specific products to the cart but did not buy them and use it to create a profile of your interests on the basis of content that we think was interesting for you (for example because you added it to the cart) as well as content that other users similar to you have found engaging. By using [this profile of your interests we can adapt our marketing materials by replacing the default content with content more relevant to your interests (for example we can show you games or other products that we think you might like instead of the default offers).



                    </p>

                    <p className="text-base leading-relaxed pt-2 ">
                        Where you have given your consent and have not subsequently opted out, we may also collect information about what is watched and bought by you, at what price, in what amount or whether did you add specific products to the cart but did not buy them and use it to create a profile of your interests on the basis of content that we think was interesting for you (for example because you added it to the cart) as well as content that other users similar to you have found engaging. By using [this profile of your interests we can adapt our marketing materials by replacing the default content with content more relevant to your interests (for example we can show you games or other products that we think you might like instead of the default offers).



                    </p>

                    <p className="text-base leading-relaxed pt-2 ">
                        We and our service providers may collect and use your personal information for marketing purposes in accordance with your stated preferences and applicable law. We may send you direct marketing communications and abandoned cart reminders. If you do not want to receive emails from us, you may follow the unsubscribe options at the bottom of each email or contact us through one of the communication channels set out in the “Contact Us” section below.




                    </p>



                    <h3 className="text-2xl font-semibold mb-6 pt-2">4. Recipients of the personal data
                    </h3>
                    <p className="text-base leading-relaxed mb-4">
                        We may transfer your personal data to the following categories of recipients:



                    </p>
                    <ul className=' py-2'>
                        <li className=' list-disc'>
                            other users of our products and services where this is necessary to perform our agreements with you, for example when you purchase a game from a seller on the DGMARQ Marketplace or transfer funds to the DGMARQ Balance of another user;

                        </li>
                        <li className=' list-disc'>
                            other members of the Group;

                        </li>
                        <li className=' list-disc'>
                            agents, contractors, advisors or third parties who provide administrative, telecommunications, computer, payment, debt collection, data processing, legal or other services to DGMARQ.COM;

                        </li>
                        <li className=' list-disc'>
                            financial institutions, payment service providers (such as banks, payment institutions or electronic money institutions) as well as card organizations (such as VISA or MasterCard) – in connection with our payment services;

                        </li>
                        <li className=' list-disc'>
                            persons and institutions that are allowed to request your personal data under applicable laws and regulations through a court order, subpoena or other legal process, such as supervisory bodies, regulators or law enforcement bodies;

                        </li>
                        <li className=' list-disc'>
                            other parties as notified to you at the time of collection.

                        </li>
                    </ul>
                    <p className="text-base leading-relaxed">
                        DGMARQ operates internationally. If personal data is transferred from European Union outside European Economic Area, we make sure that adequate level of personal data protection is assured, for example by signing standard contractual clauses for transfer of data.



                    </p>



                    <h3 className="text-2xl font-semibold mb-6 pt-2">5. How We Use Cookies

                    </h3>
                    <p className="text-base leading-relaxed mb-4">
                        If you access our information or services through the DGMARQ.COM website, you should be aware that cookies are used. Cookies are data files stored on your browser. If you have accepted cookies by using tools displayed when entering the DGMARQ.COM website, the website automatically installs and uses them on your browser when you access it. We may also use cookies without your consent where it is strictly necessary to provide our services and you have explicitly requested them, such as [maintaining your session when you have logged in to your account or remembering the contents of your cart]. You can also change your settings for cookies on our websites using the tool below:




                    </p>
                    <p className="text-base leading-relaxed mb-4">
                        Cookies are used for the following purposes:





                    </p>
                    <ul className=' py-2'>
                        <li className=' list-disc'>
                            For statistical purposes through [analysis of aggregate data on traffic and manner of use of our websites]
                            We create statistics that help us understand how you access DGMARQ.COM, which allows us to improve the structure of DGMARQ.COM and its content and thus improve your experience;
                        </li>
                        <li className=' list-disc'>
                            Creating a profile for you in order to display matching materials in regard to advertising networks, such as the Google Display Network;

                        </li>
                        <li className=' list-disc'>
                            To run statistics on traffic to reliably conduct settlements with advertising partners;

                        </li>
                        <li className=' list-disc'>
                            To remember your settings between browsing sessions and customize the Site to better suit your needs and preferences, such as selecting the display language or currency.

                        </li>
                        <li className=' list-disc'>
                            For marketing purposes, also on the basis of automated processing containing profiling elements, in particular, for [adaptation of our websites, offers and advertising to your interests]

                        </li>

                    </ul>
                    <p className="text-base leading-relaxed">
                        DGMARQ operates internationally. If personal data is transferred from European Union outside European Economic Area, we make sure that adequate level of personal data protection is assured, for example by signing standard contractual clauses for transfer of data.



                    </p>



                    <h3 className="text-2xl font-semibold mb-6 pt-2">6. Retention of data


                    </h3>
                    <p className="text-base leading-relaxed mb-4">
                        We will retain your personal data for as long as we have lawful grounds to do so. Specific retention periods depend on the purpose and legal base of processing, for example:





                    </p>
                    <p className="text-base leading-relaxed mb-4">
                        - personal data required to provide services, for the time of providing such services and after that, for the time required by legal provisions (e.g. on accountancy) or to handle possible claims






                    </p>
                    <p className="text-base leading-relaxed mb-4">
                        - personal data that must have been collected for anti-money laundering legislation requirements, including for identification, screening and reporting, as a rule for 5 years after the termination of our relationship or after the date of an occasional transaction, unless we are required to retain this information for the purposes of court or administrative proceedings,







                    </p>
                    <p className="text-base leading-relaxed mb-4">
                        - personal data processed on the basis of your consent, as a rule until such consent is withdrawn








                    </p>
                    <p className="text-base leading-relaxed mb-4">
                        - personal data processed on the basis of a legitimate interest, as a rule until you file an effective objection.









                    </p>


                    <h3 className="text-2xl font-semibold mb-6 pt-2">7. Access and Correction of Personal Data



                    </h3>
                    <p className="text-base leading-relaxed mb-4">
                        Under the PDPO, you have the right to verify whether we hold your personal data, to obtain a copy of the data, and to correct any data that is inaccurate. You may also request us to inform you of the type of personal data held by us. All data access requests shall be made using the form prescribed by the Privacy Commissioner for Personal Data (“Privacy Commissioner”) which may be found on the official website of the Office of the Privacy Commissioner or via this link: https://www.pcpd.org.hk/english/publications/files/Dforme.pdf






                    </p>
                    <p className="text-base leading-relaxed mb-4">
                        Requests for access and correction of personal data or for information regarding policies and practices and the kinds of data held by us should be addressed in writing and sent by post to us (see the “Contact Us” section below).







                    </p>
                    <p className="text-base leading-relaxed mb-4">
                        A reasonable fee may be charged to offset our administrative and actual costs incurred in complying with your data access requests.








                    </p>






                    <h3 className="text-2xl font-semibold mb-6 pt-2">8. Your rights under the GDPR




                    </h3>
                    <p className="text-base leading-relaxed mb-4">
                        Pursuant to the GDPR you also have the following rights:







                    </p>
                    <p className="text-base leading-relaxed mb-4">
                        - Right to be informed, which is satisfied through this notice.








                    </p>
                    <p className="text-base leading-relaxed mb-4">
                        - Right to erasure. You have the right to have your data erased and no longer processed if the personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed, if consent was withdrawn or objection was filed and there are no other legal basis for processing. If we have disclosed the personal data in question to third parties, we will inform them about the erasure of the personal data, unless it is impossible or involves disproportionate effort to do so.









                    </p>


                    <p className="text-base leading-relaxed mb-4">
                        - Right to restriction on processing. If there are grounds for restriction on processing, for example if you contest the accuracy of your personal data, it will be stored and processed otherwise only if you consent or to exercise legal claims, or for the protection of rights of another natural or legal person. If we have disclosed the personal data in question to third parties, we will inform them about the restriction on the processing of the personal data, unless it is impossible or involves disproportionate effort to do so. We will inform you before the restriction is lifted.










                    </p>



                    <p className="text-base leading-relaxed mb-4">
                        - Right to objection to processing. You have the right to object to processing based on legitimate interests (including profiling) and direct marketing (including profiling). We will no longer process you data, unless we have compelling legitimate grounds for processing or we need to process the data for the establishment, exercise or defense of legal claims.











                    </p>



                    <p className="text-base leading-relaxed mb-4">
                        - Right to portability. You have the right to receive personal data that you provided to us in a structured, commonly used and machine-readable format and to transmit those data to another data controller.












                    </p>


                    <p className="text-base leading-relaxed mb-4">
                        You may contact us to exercise your rights through “Contact us” section below.













                    </p>


                    <p className="text-base leading-relaxed mb-4">
                        - Right to lodge a complaint with a supervisory authority. If you are unhappy about the way we process personal data you may contact us and, if you are unsatisfied with our answer, file a complaint to data protection authority in [Poland] or in your country.














                    </p>





                    <h3 className="text-2xl font-semibold mb-6 pt-2">9. General





                    </h3>
                    <p className="text-base leading-relaxed mb-4">
                        If this Privacy Policy is translated into any other language, and there is any inconsistency or conflict between the English and translated versions of this Privacy Policy, the English version shall prevail.
                    </p>



                    <p className=' pt-2 text-white'>Contact us</p>


                    <p className=' pt-2 text-white'>By Post: DPO, DGMARQ.COM Limited 31/F, Tower Two, Times Square,1 Matheson Street, Causeway Bay, Hong Kong</p>



                    <h3 className="text-2xl font-semibold mb-6 pt-2">10. Representative in European Union </h3>
                    <p className="text-base leading-relaxed mb-4">
                        The Representative of the Administrator in the European Union is DGMARQ PL sp. z o.o. with the head office in Warsaw (00-113), Emili Plater 53 Street, entered into entrepreneur register under the number of KRS No: 0000677012. Any questions relating to personal data processing in European Union should be direct to the above address of head office or https://supportcenter.DGMARQ.com/#/tickets/add/gdprform.
                    </p>



                    <p className=' pt-2 text-white'>Appendix no 1</p>


                    <p className=' pt-2 text-white'>LIST OF DGMARQ.COM LIMITED BUSINESS PARTNERS AND/OR AFFILIATES





                    </p>



                    <p className=' pt-2 font-semibold text-white'>APPENDIX NO 1 TO PRIVACY POLICY







                    </p>

                    <p className=' pt-2 font-semibold text-white'>LIST OF DGMARQ.COM BUSINESS PARTNERS AND/OR AFFILIATES


                    </p>




                    <ul className=' py-2'>
                        <li className=' list-disc'>
                            1. Global R&D sp. z o.o., with its registered office in Warsaw, Poland, address: ul. Emilii Plater 53, 00-113 Warsaw, Poland, registration number: KRS 0000692862.
                        </li>
                        <li className=' list-disc'>
                            2. DGMARQ PL sp. z o.o., with its registered office in Warsaw, Poland, address: ul. Emilii Plater 53, 00-113 Warsaw, Poland, registration number: KRS 0000677012.

                        </li>
                        <li className=' list-disc'>
                            3. Tech sp. z o.o. with its registered office in Warsaw, Poland, address: ul. Emilii Plater 53, 00-113 Warsaw, Poland, registration number: KRS 0000691154.

                        </li>
                        <li className=' list-disc'>
                            4. DGMARQ RE sp. z o.o. with its registered office in Rzeszow, Poland, address: ul. Adama Matuszczaka 14/2, 35-083 Rzeszow, Poland, registration number: KRS 0000659335.

                        </li>
                        <li className=' list-disc'>
                            5.  DGMARQ LLC with its registered office in United States of America, address: Carson City, Nevada, 701 South Carson Street, Suite 200, Nevada 89701, USA, registration no. E0627762014-7.

                        </li>


                        <li className=' list-disc'>
                            6. DGMARQ.COM B.V. with its registered office in Amsterdam, the Netherlands, address: James Wattstraat 77/A3, 1097 DL Amsterdam, the Netherlands, registration no. KVK 65006674

                        </li>

                        <li className=' list-disc'>
                            7. BDSF TECHNOLOGY B.V. with its registered office in Amsterdam, the Netherlands, address: James Wattstraat 77/A3, 1097 DL Amsterdam, the Netherlands, registration no. KVK 74293591;

                        </li>

                    </ul>





                </div>
            </div>

        </>
    )
}

export default PrivacyPolicy