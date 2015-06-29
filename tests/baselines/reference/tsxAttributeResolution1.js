//// [tsxAttributeResolution1.tsx]
declare module JSX {
	interface Element { }
	interface IntrinsicElements {
		test1: Attribs1;
		test2: { reqd: string };
	}
}
interface Attribs1 {
	x?: number;
	s?: string;
}

// OK
<test1 x={0} />; // OK
<test1 />; // OK
<test1 data-x={true} />; // OK

<test2 reqd='true' />; // OK
<test2 reqd={'true'} />; // OK

// Errors
<test1 x={'0'} />; // Error, '0' is not number
<test1 y={0} />; // Error, no property "y"
<test1 y="foo" />; // Error, no property "y"
<test1 x="32" />; // Error, "32" is not number
// TODO attribute 'var' should be parseable
// <test1 var="10" />; // Error, no 'var' property

<test2 />; // Error, missing reqd
<test2 reqd={10} />; // Error, reqd is not string



//// [tsxAttributeResolution1.jsx]
// OK
<test1 x={0}/>; // OK
<test1 />; // OK
<test1 data-x={true}/>; // OK
<test2 reqd='true'/>; // OK
<test2 reqd={'true'}/>; // OK
// Errors
<test1 x={'0'}/>; // Error, '0' is not number
<test1 y={0}/>; // Error, no property "y"
<test1 y="foo"/>; // Error, no property "y"
<test1 x="32"/>; // Error, "32" is not number
// TODO attribute 'var' should be parseable
// <test1 var="10" />; // Error, no 'var' property
<test2 />; // Error, missing reqd
<test2 reqd={10}/>; // Error, reqd is not string
