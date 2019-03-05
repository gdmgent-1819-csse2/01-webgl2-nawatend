import TestMatrix2 from './Library/Math/TestMatrix2.js'

/** Class to run tests. */
export default class Tests {
    /**
     * Create the tests.
     */
    constructor() {
        console.log('Running Tests…')
        new TestMatrix2()



        //Testing of vector classes =------ OEPSS geen TastKlas TODO
        console.log("-----------------------------Vector2------------------------------------")
        const v1 = new Vector2(10, 41)
        const v2 = new Vector2(14, 40)
        console.log("Add: v1 + v2 ")
        console.log(v1.add(v2))
        console.log("Sub: v1 - v2 ")
        console.log(v1.sub(v2))
        console.log("scale: v1 * ")
        console.log(v1.scalar(2))
        console.log("Norm: Length of vector")
        console.log(v1.norm())
        console.log("Dot Product")
        console.log(v1.dotProduct(v2))

        console.log("-----------------------------Vector3------------------------------------")
        const v3 = new Vector3(10, 41, 5)
        const v4 = new Vector3(14, 40, 2)
        console.log("Add: v3 + v4 ")
        console.log(v3.add(v4))
        console.log("Sub: v3 - v4 ")
        console.log(v3.sub(v4))
        console.log("scale: v3 * 2 ")
        console.log(v3.scalar(2))
        console.log("Norm: Length of vector")
        console.log(v3.norm())
        console.log("Dot Product")
        console.log(v3.dotProduct(v4))

        console.log("-----------------------------Vector4------------------------------------")
        const v5 = new Vector4(10, 41, 5, 1)
        const v6 = new Vector4(14, 40, 2, 4)
        console.log("Add: v5 + v6 ")
        console.log(v5.add(v6))
        console.log("Sub: v5 - v6 ")
        console.log(v5.sub(v6))
        console.log("scale: v5 * 2 ")
        console.log(v5.scalar(2))
        console.log("Norm: Length of vector")
        console.log(v5.norm())
        console.log("Dot Product")
        console.log(v5.dotProduct(v6))







        //Testing of Matrix classes
        console.log("-----------------------------Matrix2------------------------------------")
        const m1 = new Matrix2([4, 1, 5, 2])
        const m2 = new Matrix2([2, 8, 6, 2])

        console.log("add: m1 + m2")
        m1.add(m2)

        console.log("sub: m1 - m2")
        m1.sub(m2)

        console.log("mul: m1 * m2")
        m1.mulByMatrix2(m2)

        console.log("rot by 45 degree: m1 ")
        m1.rot(45)





        console.log("-----------------------------Matrix3------------------------------------")
        const m3 = new Matrix3([1, 1, 1, 1, 1, 1, 1, 1, 1])
        const m4 = new Matrix3([1, 1, 1, 1, 1, 1, 1, 1, 1])

        console.log("add: m3 + m4")
        m3.add(m4)

        console.log("sub: m3 - m4")
        m3.sub(m4)

        console.log("mul: m3 * m4")
        m3.mulByMatrix3(m4)
        console.log("rot 45 degree z(roll): m3 ")
        m3.rot(45, "z")

        console.log("-----------------------------Matrix4------------------------------------")
        const m5 = new Matrix4([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        const m6 = new Matrix4([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

        console.log("add: m5 + m6")
        m5.add(m6)

        console.log("sub: m5 - m6")
        m5.sub(m6)

        console.log("mul: m5 * m6")
        m5.mulByMatrix4(m6)

        console.log("rot 45degree: m5")
        m5.rot(45, "y")
    }
}