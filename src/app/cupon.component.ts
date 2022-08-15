import { Component, OnInit } from "@angular/core";
// import { pdfmake } from 'pdfmake/build/pdfmake';
// import { pdfFonts } from 'pdfmake/build/vfs_fonts';

// pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
    selector: "app-cupon",
    templateUrl: "./cupon.component.html"
})

export class AppCupon implements OnInit{

    constructor(){}

    ngOnInit(){
        
    }

    generarCupon(){
        console.log("me diste click")
        const pdfcupon: any = {
            content: [
                {
                    style: 'tableExample',
                    table: {
                        widths: ['auto', '*', 'auto'],
                        body: [
                            [
                                //posicion 0, 0 => logo centro
                                {
                                    //colSpan: 3,
                                    border: [false],
                                    fillColor: '#8b0000',
                                    color: '#fff',
                                    width: 80,
                                    height: 75,
                                    image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACWCAYAAAB3qaIPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAQpRJREFUeNrsfQdYVUfX9aELKAoiWChiQQXF3sUO0Rh7LzH2aNQkmqixxVhea6LGaGKLr70bey9YsBdEBU
                                    EFpaqggGADFf61znvnfkdyQZDyK555nvPcctqUNXvW3rNnj15KSoqkJjXllaSvVoGaVECrSU0qoNWkJhXQalKTCmg1fbrJUK2CHEtGz58/t05KSiqop6dnkpKSYvTmzRs9fL4xNDRMMjAweJo/f/4YnItXq0oF9Ac30sXFxTlHRUVVjYyMrBEdHe365MkT+/j4+KI4Cu
                                    jr6xsVLFhQcnJykkqVKiWVKFHijamp6XOAOQb3RuC4jeMajss4buB4rFbp+yU91Q79/iB++PBhjVu3brUNDg72xHdXgNc0OTlZAlAlSGMJQJZBXL16dalSpUqSkZGRBKkthYaGSuHh4dLjx48l3CNBWkuFCxeWLCwsJAcHhwgcZ3HtTrzjCI4HalWrgM6x9PLlyyIBAQ
                                    Fdr1271iskJKTWixcv9Ahg0AgZwEyJiYlSkSJFpGbNmklubm7S69evpWPHjkmHDx+WfH19JYBfvoagZ2Ib8BreLyR5zZo1pSZNmjyoVq3aPmNj41W47KRa+yqgsy0BgMWuX78+4MKFCwMiIiIcZJIMiUswp7pOqlixotS2bVvJ3Nxc2rJli7RmzRopMDBQvhbglMHP76
                                    z7Z8+eSfny5ZPs7e0lMzMzCdRFunv3roSOIoO7fPnyUufOnaU2bdrsx/kFeMUBtTVUQL93Qv2YXL16dciZM2d+uH//vp2QxmlIb1mydujQQcK10sSJE6UTJ07IwCcVETTExMREK5nbt28v9ezZUypbtqx8jpLax8dHWrJkiXTq1Cn5XVAsJVdXV+nrr7+WWrZsuRe3Ts
                                    ZxUW0dFdCZSgBlwyNHjswCT67DeiIw00oEXZUqVWRpSlrxww8/SGFhYbJE5n2gDzJoyZuPHj0qS+ZZs2ZJjRs3ltBZpAMHDkiPHj2iwih16dJFvnby5MnS+vXrpfz588udhZ2iU6dOfPbLQoUKzcdrZ+BQrSQqoN+ZjM+dOzcRvHcMgGeki1oo06tXr6RixYpJgwcPlq
                                    AgSv369ZOBS+lqaWkpzZ49W6pdu7YUExMjAYjSkydPZPAWLVpUmjBhggxmWcuEhOazSD3GjRsndevWTRowYIB0+vRp+T+2FZVI8Grpt99+I03xhZL5Hc6dUJtMBbTO9PTpU8dDhw4tx7DfnCCmBeIdlET+JIitra1l+nDz5k2ZP5MH//HHH1LdunVliQ3+Ldna2krDhg
                                    2T6tWrJw0dOlRCx5G5srLDENQ8Vq1aJV9PWsL3CKUTeZQVx+XLl7ODJGEkmFihQoXZauupM4VvJUjNBitXrvS6dOlScwL5XWAWVIPS18HBQZo7d64ExVELZkpSWjqEFCZloMlu7NixMkhJTSixU0t/MSLweY6OjlKjRo1k6U6awmcUKFBAunfvnvTdd9+Rl4PVGM/av3
                                    //CpwzUwGtJjkBIO3AV/eCNztRaUuPYohEcNF2TMBBcZQ2btwog43Ao73Zw8NDVg69vLxk4AqFkB2FlEQoh7oSLR8E/JUrV6Tp06dLf//9t9wJhPJJXs3z//nPf6TSpUvzv77r1q3bAaXSSgX0J578/f27r127dmNUVJQFlbiMJtICmtXIb5ctWyYDjVYKWjm2b98uff
                                    XVVzLQSREEXZB5HjpLegqmuIbA//3336WDBw/KZr0ZM2ZIixcvlidhaB5kZ9q5c6esZLZq1YqmQQ90qt3Ig7XKoT/RdOvWrQ6bN2/eAIAYp2WOS4s7E7xU2ghW2p35mxKzTZs2smSl2Y1muzt37vwLwKQkTKampumCmp2E4GVHq1+/vvTrr7/KNm2+l4Dnedq9UQZpz5
                                    490r59+6SGDRt6d+7cuQ3Ox6oS+tPizE127dq1BqDIFJgF3aAyR4575MgRmVr0799fBjMtFD169JAVwtu3b0uppT4BKq4lPUmv05CWUBLzk+/5/vvvZVs3QCt3ClKTGzduSJcvX5Zq1KghUxEonw0guTfgESYqoD+RBA5bYQNSXFyc2buGf12JkyQ01VGK0qxG+3Hfvn
                                    2l1atXy7Zj0hACnmBOPQpSktNJidy4QoUKMsDfOZTiPeThZ8+ela0oVDb5HP5P6kOeTosIr2Hn9Pb2/gxUZJEK6E8gJSUlWVAyQ6ravg+YhfSkdKby5+fnJ1WtWlWWjlu3bpU/01MqSTMI5oiICNl2TWBmiB/imbyWCqWVlZWWl7MMYmqd/wvJfujQof4A/7cqoPN4On
                                    78+K+gAtXTszJkBFyUiAQlJ0n4nZKSkyZKBVBnpeN8bGyszHtp2iOlIIXJSCdinu3s7GSznbiHXDoyMlIeNegUJTz+eD062OyYmJi6KqDzaII07QaKMDAz1gxdwOKwbmNjIz148EAGMkFNYNEGnRFFm4Cj9UPppfeuRMclT09PqWTJktLJkye1iiafRXu48N4Tic/GPS
                                    bbtm1bjnMWKqDzWAKAih8+fHiukGBZMg9p7ufwTyBzyCewae1ISEhIF9TkzAQbrw0KCpKvTys/fA6vJ5ipCJKq0A2V/h+6LCSpn0OJHhAQ4ALuPflTaONPasUKFKXpUVFRxbJCNVKDhxyagKaVY+XKldI333wjg5R2aMFvxfDPjkQOXLx4cemnn36SnZlo7RDg53nhlc
                                    fr+Mm8cpqbkypUOmkOpNOS0irD+wlu5kMXdeG1UBCHubq6bra0tDyrAjoPpPDw8EYXLlz4MitUI71EqwZdPslv6YxE6csJD+HbTGCSZ9epU0dq0KCBTDPo08FJE84ukjIIEx19QgjiypUry6tdXFxcZHszJ2+WLl0qf6e5TnQEgp/vJaBJgVJTGP4fHx9vCCVxdteuXR
                                    vTSKMC+iNOkFr6R44cmYahWz+7AE0w8aASRgDxoHQcP3687IREiUpfC4JUOBYReFytwt+cQRS+0wQ0JSw982ilEFSC/hu0oEybNo2KrOyOSiCLZ4pEqkN/ab6f1ESXDwrL7ePj06BWrVqd0Vk2qoD+iNOdO3daBwcHN3hfE10anURW6qgY8rnCX5rSk6Y78t6OHTvKCh
                                    yv42whpTXt1S1btpT9nWmL5vWkLVQqCV4CnhYMOjERwLSaCOsGzYG6OhZBTn8SWjroXqprkkgojl5eXuOQp+34nagC+iOVzlCgRpGPZsR7LqPcmc8j4DjtTKlK4FFSUtrOnz9f9sDjLCEXw1Ly0l2UTv6kHwsWLJBdQwUgKbkFfxacl3llB6HVJL3EDsEFuMzHjh075H
                                    ylNetJKQ0FsRI6TAdI6Q0qoD/CBMncFEf97JTOAtSUuPR15kJYWh4IJPpykPtyuRQtEQQpKQRnDcmzKUGhmMpSVVgkskKD2Im4Soadgq6r6U3hi454+vTp7wHoTezvqtnuI0vXrl0bzEbMqplOl+WAEprDOKkFuSv9N5o2bSr9+OOPMsDZiUgV+P7o6GiZSvA6Apucmn
                                    nKSr74brqOfvHFF9LFixflyZp3jULME6R0LXSqRnmxvfM0oAEeJwz7LTLreJShigMgSTO44oRUgorbmDFjZD8OOvOTZgjA8loCSaz4zq5EQNOaQmnP0SAjz2ZeSHt8fX37qID+yNLNmzc7AnTmGZ2Jy2wiSL29veXp74EDB8qxN7jK5F28N7usLHw/J1toA6e5LqM6Aq
                                    /DyNUKHcJG5dAfjzKoh6G1fU6BWSnt6JNBE9s///wjS8mcGBHSAjWVQgI7M+Vk/tABCoMCeTg7O69TJfRHkB4/fuwcGRlZPbssG+mBg7yYgOJKEmX0JCps2c3dlQoeFcFDhw5pJ2L4vowm8vpbt261VinHR5JCQ0MbP3/+3CQnJbRSUpPHatb2yQCnGY125syALLOJ79
                                    y9e7dsu27RooWcj4yuQGJHDAoKcs9rTkt5FtBorGa59S4xa0hnfa7946oSLmolwKm45eToQOsJV8ZwAqdWrVoZfh9HLtxbHCNZFZVDf+Dp6dOnZmFhYTVzmm4orQ0EE6Uk43NwooX2aPpp0ESXk4kTOZxQad26tbxQ1t/fX17W9a6yC8equ3fv1rOxsckzgSDzpISOjY
                                    0tlZCQ4JAbdENYO8BHZYtHSEiI7HVHi4fwsMvJRGDyHbSuMB+coczMCpiIiIiaKuX4wBNjNYO76ueUQqaLQ9MXg7ZgfnLCpUyZMtpQYDm5sp5gJk/nOkO6rdLhSfiWZCTfDx48qMA+qQL6A07h4eGVcvudBJFYtEq7MF0+KalJBdJb2Z2VRCDzvfSpJu0oV66cPFIQzB
                                    npzKQlMTEx9sifrcqhP+AEblgqt99JcNFxn1yaXnEMKUAKQts0rRHZndh5+B4qhPSZZidiLGqGM8go1SLoX7x4kR/0zN7c3DxcBfSHCWY6/zjllkKoHL75biqIBNv+/fvlGHakHdntGCWoBhcDcJEtFUF67/G9nF7PKNXidZrlXXaMhKpSjg8wAcjGaOxcj+9GQNOTjn
                                    7PkyZNkl1HaZMWwMkJZZDv45IsmgsJbrEzQGYTpHRxlUN/oAmNY/7mzZsCuaUQKikAzXaM1UEnfi6JGjVqlByvQwA7O99FZXPdunXyukR2Io4M71NmSnqMaHkG0HmOcjDgIoZQy5xaO5heoj8Hne3nzZsnOyjR6sDYdjmRqPjRxk0gb9u2TfYpeV8fEvD//KqE/kATGp
                                    rkWS+33yuCKnL5Ff2hGTiRjvdcVpXdSiE5OT386LLKxQO0qKSOyZFJuqSa7dT0f5KSCij3SqF0ZkBFKoecYKHlQ1dsu+zoPLQ3c4qdz+aaxSxSLIO80h7qTrLZpBAy1K1Ytc0lWQQYF9ASfNk9Y8lndu3aVfYVYXBIjgJZpFgpKqDVpFXQOHFCUBHAw4cPl6OSCulMO/
                                    G7HP6VEjwjkpaUg6HA2rVrpw1Mk0Uz5WsV0B9uyrWFnwQi+SvBRG83Rk0iuMihGXmf0+DpOScR9OTdBCifISImidUoadmUyckJaHraOTs7c/VJ1iosOfmVCugPNFlbW8daWFg8Bo8tnpPOSZSMBB6pBk11HPoZsX/06NHyglWxIZCuPAhPN5r2SB3IhwlSWizoB8J7z5
                                    8/L9uyCXqeU1owxHYUBHxWlEEtCAwN41VAf6AJw3sCQBQLsOW4bZXAIvgIaIJSgJPWB7p1ptWhaGLjZMhff/0l0xQ66DPoIzk4nZoYiIaJoKaPBp2eGPpAeNGR0nAWkh2GVCcrdIN5RB5CVEB/oAkSi5QjPqcmViiZCSSGDmB4LgKYEUEJRtqfCRAGVeReKLqchERYMA
                                    KSUvbPP/+UwxsIHkxpzBh4DO1FHw26g3JGkB2Hm3ryHGOBMM7H3r17ZVt3VqfW8c6HKqA/0ETOWqRIkcAnT57UzSnKQUlJKfnll1/KoGIQRdIHzgryNyWwiLuhizdzVQvByuVTdPukkxEpBcFO2kGAE6j0qWbIMC7n4rMJZAKfVIRbyPEzK2Dm+0BbkjGahKmA/kATQW
                                    RqahqSU0BmIj2gnZlSlItUaUajxGW0UbqMiuCLaUl4SmbmkzOLyj0RU8fxILgpmRnYkR2VEpwgJP9myupsqCYu3hOMOOEqoD/gBOl5lUDITmsGJSh3rbp06ZJMObjCe+3atdKUKVO0nJdBZhiNND26I7ZqYyLo05t0IbAFaNmZxILb7PLeY+cCVboHveNRXml7/TwKaH
                                    9Is2w1RbHxSSu6dOki7xBLjjxixAjZj4L2YNKMjIQcIxgZFIYmPa4Kz+gsopDc2UmjmF9ra+sbeGayCugPOEF6hmAovZcd6/koFdnwlKp0NKIyxrC13MGVFgnyWoYAYyDyjCyIFRsG0XJBbpzRDYNyIml28jqfl9o+TwIaoEu0tbU9k1Wg8H5OnFAB5NDPyPsENbktlT
                                    Iqg6QgXCnCFSMZtayQC3PLClIOrmzJyVAH6SXw9zcA9Om81PZ5kkMTMJCeh4KDg7/KSlguSmZOnNAKQQWOwRlJM8hnCUhyadqJKZkzw2tpmmOUf26iyQ006aSfkdAD2Zk0dCPIxsbmpiqhP4Lk4ODgDZAlvK+nm7iPlgsqgJzaHjlypDyTxwkUUhByZ/7O7CZEYhMhTo
                                    /zXsbTEFPeuZVIpZycnI5h5ElUAf0RJChwoZBAp9+Xdojg4MI2TBfNIUOGyCusOXFC6wZ9Kd7X4kC6wQWt5N60SZOLZ2SL5GxreHB5Z2fn3Xmt3fMsoMl5S5cuvS2jQVeUkpkHnfNpjuOmPpwsYVBzKoQzZ86U6Qb9NbIaNpdUhtPfpB6dOnWSlczcADU7Kkade2XLlj
                                    2hAvojShUrVtyFIT06s0O5sGow9jKHZvpmcEaPHJqR+f/73//K4M4OKcl3cc9CUpevvvpKDoWQ00oiO3n58uW3YpR4pgL646IdUQDI9sx4pInQWj4+PlpqQLPcuHHj5L1TuOlldjrtU0Gk4xH9qCmdSWm4SCAno5ZCUX5VtWrVVXmxzfM0oAk6Nze35ZBIGSbSIvoRFT
                                    VuNzFgwADZbEfA0Zoh9kfJriQWu3IE4JIqApwcnXQks3QpE8rgAXt7+xsqoD/C5OrqehES72BGpDSvoXSkJx0tG1xtQisHnYA4lU5/DUrRnDCvEcCcbPnhhx9kj7revXtrNxzKzsTRp06dOr/ndiAeFdDZCJSaNWvOhGRKyUhjE8jcvpgbXzJOHEN7USHkVDf5M105c8
                                    qLj7yczk7sOIzIT8VULCTILulcokSJY+jkx/LsqCx9AgmAPgnJuzcj0k6E8qIE46QJ9+8m0GhaI5/OKpjfFWKXU+H0D+F+4VxsS0tLdimJeHdy48aNpxkZGaWogP6IE81rTZs2HQNAv3gXmLnjKx3paUajVCZ/5qZA79rUMiPcnLOBwpGfLqB0aNIFeL6Hu9GuWLFC3v
                                    eQbqpZNeexbGXKlNlapUoVr7zc1p/Mqu/KlSv7gwf/FhQUNEGXHzGlJqUwQ9ISyPR35mQHp7xptiOg6Of8PsM/wUTpzq3fCFAqgYGBgXJHOX36tFbR5Dv4fE6HM8YH76Pvdfv27eX88Pz7jBCaRbdxUHTH5lYQeBXQOV1QSD0AZQ6A0RkNXE7pSCSWStH5iNKTICJ4Od
                                    zfuHFDVtJoqqOEzezSLkpmApYR9ukXwudw1vGzzz6Tj0WLFskH88AIoOPHj5eaN2/+r+ewc5HDZ3aanYkdoVGjRpPt7e2D83o7G/zyyy+fCqbpTIS2TbwJKd1bSR8IUo05S6YnXCfYrVs3eainD7Qw4TH8VmZpB2kFwxrQcsIQu1x/yJlGUhi+z9PTU76G3nrcaIijBN
                                    /FGUQ6LdHbT+wVzqlyjiSZ6VQsFzrk0e7du38HKZ2c19v4kwsFhiH/aKlSpSYrFS1KR4KGU8+MTcchnooZqQm5LDcCCggIyHSMOhEEnVYSRghdvHixbCVhIlh//vlnef0g7c9c/UKHf7qlkuJw2RUtHgsWLJB5N1fCODg4ZMo2TfCjAz7s0qXLQIwSrz6F9v3kAE2Qtm
                                    vXbhok8UEBDhENn9KZPhoEmZjq3rRpk2yHfp9V5AQ0nfhJObgjlggqw2fxPzr60+OOgGUIXnamNWvWyHlkB6PFg8Dn+5lIfTLjbIX3JYM2DSxZsuTdT6V9P8lgjZB2r1u3bt0fCtINgplA5gb05MjkzOS5pAPk0lQSCcr3mbXjPYzZwUSlLrUySonPjsPN7rlQgMFqyJ
                                    GF4iaoEKU7EztdRpVS0ph69epNdHd33/0pte0nG9uuUqVKEZB2bSCBvQGs4gQuFUJG3+d6P3JX+kBzVQqtHqQc72O2E+6ladnA2Zlo7ZAVGrxflxVCvDej0pkdsmzZskvQaafnduB3VUL//zXl3YUE6xEWFvaEcTA4O0jljCCjlYP2aHrA7dq167020CQ46XjExBlIXY
                                    DUbNwjH6mnoymNKbEZm4OJFOhdACWtweiytnfv3sNyYrMiFdAfeALHPAFQdwBgA6iI0SJBhySuHRRx5t7XiZ/30d7MxFm/tGhLWqu5heWFtIXgppUlPR8MSmZcu65Pnz4DQE9ef4rtqQY8R4KSeAxKmbufn58veSqls+Cs72P3VSqglPyU9LRBcw1iZpQ6dgCa9Ug52L
                                    kY/iAtQFPCA/zL+/bt2wf5T/xU21IFtGbYB/gelSpVagoAnESTHg8O2VmZWeNzExISZLszY99hJNBGPcqAhUJWSKmsMjFwo66NgSi5CWYortP79es3EGB+/Sm3pQpoRerVq9c/ixYtamFjY3OHXJrSWYTfet9E8xtjeFDR5GSNtbX1Oy0mlOJ8L6iDnAdSDdKh1NSHz4
                                    GyGQUp3h2SeXxWl4SpgM6DqXHjxl5btmxpVKxYMVoITmZ1jxSCkJ2DkypUDAlScuP0nkkpzghNXCHD6zjDmNqPg3wZ0vg4ntcIesDGvO6joQI6C6lkyZKRAwcOpMTrDIl6j7N7WQE1uTgnaOjATz8NTqXTn0NX4v9cy0hpzkTllLZqYcPWRP1PqFKlyoRhw4a1cHFxCV
                                    Bb7P/SJ+XLkdkEJe4ZeO8/T548sQgMDKwMIOmLmb7McmnSA85C0pOOHncMci6AKp5HMDNsLi0t5O+0kHAKXiympZQuWrTotk6dOvUEzfgHdOaN2kqp6jo3g5t8zAnStfbKlStH4bMdpKRB6m0iMpI4E0m3UEE/+MkY0ewklLx0huJiXFpDaNHgpA65N/k0eP3eevXqza
                                    tVq9bRT9G+rAI6h9K5c+dq7Nq1q+/x48c7REVFFRWb+2QU3JTC5Mb04eDiAe5ruHz5ctnxiK6j9KrjZAzBHhcXd7906dK7a9SosdrNze10WjGn1aQCOssJip7N0aNHWwLY7fz9/evGxMTYkhYQ2GJXKxHAXJek5mQJQyJw/SIBDKkbZ2FhERAZGRlw4MABIwD7OIC8B9
                                    c9UGtbBXRug9vax8enJjhx7YCAgJqhoaFlIF2LArgWIpyYsp7JiWlThrL4YsiQIef79+/PdX63cU0oPfAoiVVprAL6g0kJCQkmAKYVFL9iL1++tAawTaKjowugrvUB1Be2trbPQVPiIYUjuQUd+HF8dkXlVwGtAlpNeSipdmg1qYBWk5pUQKtJTSqg1aSmzKVcX4J14c
                                    KFkv/8809HKKP5mjVrtt/T0/MK/3/9+rX++fPn3Z4/f25BZVX85+rq6l+iRImH3t7eVUxMTBLr1Kmj3RPE19e3rLm5+YuCBQsmXLp0qZqhoWEKt3PT09NLxr0mb9680cP1lx8+fGgeGhpaGrcY4b0ppqamUTVq1PBPbRo7d+6c044dO9rjXrMGDRocadeu3TldZXj69G
                                    m+ixcvuvE6/KSDcjyed9XS0lK7svr69evO9+/ft0Ve9EVZ7OzsIitVqhSYRr04bdu2rSO+Gnt4eOxr3rz5Vc19BmfOnKmMegguXLhwnLj+7NmzFR0cHKJZN6i3mkWKFKH7610/P79ikZGRLKsxy4r6Ca9fv/7t1O/jVDyeWz1//vyx1apV08briImJye/j41MxOTnZFL
                                    froU7jqlev7oM6fst68ODBA7NVq1Z1joqKKl28eHHf/v377yhUqJB2Kv7Ro0fG69ev7xgSEuKCcl8bMGDAtgIFCuR8GAVhI82NY8+ePfX09fUfVqhQYU/t2rW5kC5m8uTJA3kuNjbWDBVyDxUYamFh4YfDH9cGzpo1qw2dg/B/EH7HBQcHFxTPQ4fY/O23307bv39/ZQ
                                    DZD/dfw+djXPeU342MjPzQ2C79+vX7Ge9KAOAu439fXPPA2dn5+I0bN0qIZ23fvr0xwPfAxcVlLwCwCd+jf0TSVY6rV6+WwfNeACwE8Tl0tEArK6sb6Ay1xTWff/75LlzzWFmWgQMHTtb1vN27d7uzXgCcnbVq1dqC++Jmz57dl+cAMHOUPRLXeCrvKVas2MUFCxZ8w+
                                    /lypXzmzBhwjR+79ix40T2OeTrLMp6Gd/DITTWAGCmyvsBWq7eTUEnOEubuPh/7969tYl33otnnDc2Nr5jbW19+dSpUxXENXfv3rWytbW9yDy4u7uvgWAIQN73Pn78OJ8mz/nQxvvR2c41bNhwCZ7l17Rp0w0QVgY5jbFcAzOd0CFRLqChl4v/Zs6c2ZeNh96en7ZaNH
                                    zYli1bWqBCjHAYo4JM6BAESWfASkWjP5g6dWp/cX+rVq3Wf/3113M1IbN4jwEkwR+oxEP4bsjn0EeiU6dOCyHhtnLSAof+zZs3HVHZt3D/Sj4H79a3sbHxHTRo0DTx7K1btzZj3jAK2KUuC8BQDg39+MqVKw58JvPfvn37BehA9yIiIsw0ne0onvezoizGCQkJhjrqRQ
                                    95udS3b99F4r+xY8cORlkfY2QxY71Aikbs27fPQ3kfgHjhzz//lAFdpUqVqxAMv/A7RpUZFStWPKwpKxcGOKPDhffp02ea8v4ZM2YMACBPEZTo2CUVnas+2iECI5o578enJYTPxqJFi15B/mVAQhpPd3R0vBIXFyf/Dg8PtzAzM4uYMmWK3AkXLlzYBR3cX5Q3KCioCO
                                    oyEYKnfk7jLNc49J07d0qgcioMGTJkifivd+/eHKaCMEQWg9Sk13sK9xjk0I0jCZWSyM3VkfTw+Wro0KELMcx1f/nypUxJIEVfcVjlpASu5T1vIC1e4/cbfH/N52g2hU/B/ZQ6dPxJLl++fAik9srTp09XYyXcvn27VHR0tP2wYcOWi7yh4x3FEPno2LFjTdIoUjIogB
                                    6fCWn1dP78+ZPQeWzQaO6akY/D/StFWZJ0rfNDY9ujE5Tr2rWr9t3olFvz5csXgnqxRb28IYXSNbhqDknxKX9HWVM0ZWU44Fs//PDDLAz/fQBALcXEaNkCbbEMkvQmpHJT5YPxzhRRNnt7+9h58+aNR6etRJrFmc8DBw60wmizEm0lUwx0yHiMAjvQGdrxN64rh07lJ8
                                    oLyhE9ceLEHwD62DyjFAIwdqioZBQ0TPwHIMRCWrqTH0JS5dOsctYZIRTDlTmkz1GA2xCgaaD5+1/ukwQ/uV+qv/Ug8d66FlyzEqRcMH0tQCGc0AmSIK20e16TX0MKRV6+fLlcWmUCD9W+B40bBwBHYjSpogE0+ec71/Zh+LZn3kCBIsR/Tk5OjwD0BqiXUNSLyfvQSG
                                    WqW7euP0axwniXLX9D8pqi/OUxQh2vV6/epUOHDnmkVzbkJxJtFweBVB5SV48dDSPaW7wclOM2dAs5CAloiN/Jkyc98VwX/qbzFqT3Qoyc/nlGKUQFWgFsr1C4l9repK9P/97nGsCmoAe/GTdu3FT0+EgCkw2N4WsM7omG9NOH8pHQvXv3bRhqB2KIPwUwZsgfGMBKQi
                                    OUhHRvieeaYYitBRDbQWoN0ig4RfD/SwDhLQDi+U8w5Ftn5B1UmiD546GcWvE3pPvzDRs29IZSVJmPQvn0v//++z9ARc6nktCF8ZEEifxS8V5tvWRTojKpjzJyp6MI8OGqkLQp7DDg1mfmzp07mPQOUllnBwTdSwSAX4B+WbVp04YdjM5Tj5XXgKYwFIQZ6JUeePxe1O
                                    3Rzz777CJAvAO0cHnnzp29cmN6P9ckNCrQUAzF7wBfFAAcAkkdyoO0QpyDlDHFcLwOVKE6+GV+nH8pLCLpJVTkS4DW5ZdffhmPYxwacDg6RzCUqSANgAxSDeFaga+xYmSsMvX19dCwbzTl1KeFAGW5hyOUnzj/r12n8G5DTbWkVS/ZESkmWXPI7zh48KBnnTp1LnC9Ig
                                    B3iSMnOmKVdxgOkkl9WC4KIoA/NX1KhtAxIh1kUEyMoh3WrVvXAZ0oX8+ePXdA0d4XFhZWKM9IaNCLeFQEwaHtpii8AYalZhiiWKnPqQVjaKJS95a5DNLVUHO9kZubWwyGtxt///13VwzxCfj7nd7uGLYLVK5c+RAaratGKtqiQS9C+Rr9119/TcPI8ITA0oDrtaIh8y
                                    HP8RkpH11CMSQbYOSIE6Y9SKVds2fPnpvefXg3n2+E9yjrxVBTLxdZL0Jqvy/YcS9Xz1KfiNOYCOtDIheHcFiBcynIq4O3t3d9SFSdG9lDkOjhMGDdU7mDcEpGHVpw9Y2C6uXjqEIdRdCMHj16HOSB9zk3aNDgxJw5cwYvWLBgZp6Q0JCG91ERRqgI7RAeFRVVoG3btp
                                    tu3brlhCE3kY1GrqyjQVISExMNwLflRodyuHzNmjVdoUzlo3TJaB7oo8wDfPVhhw4ddgQEBDTk/2gohgUzi4+Pt0jF223REUIy8mxwy3woj22RIkUCFHl+Z2fDu0mvjNBpLRX1YoF62Qxl1YFUhHxcyWnFqIL/M0S5MJqVYKctW7Zs1L179yxRj2WhyxwAqCNwhFeqVO
                                    novn37PNPqOMwbqEQBlC0EQuQNQPsEebZTXoO8lgA1ecQIUxAU0ydPnjxcnKNiCiV8zdmzZ6vnGcoBxeIuKiMakkAbzRvf3SCZEkuWLHkLDcaJAIbheprGkKcP0BhpLBBeqFBjLy+vdnTHfJ/8WFpaPgoODs5Prb106dKB5PfgltUVVhkrnHeoWbPm+bSeAZ6szSslKs
                                    fiFi1anBZKoZIXp5XQue5Q+z9w4ICHol6qkJ5AKb3NkAY4Xp8/f76MclIDeSuNugrVUVd6GouRNq1cufJLDPnHqKOgztypeG/fvv0HHBP/+eefSRilxoIfV8JzzWkNYmcEdUoQ9+/cubMtnvmkRo0avqQp6Ay+oBRvWUZQdw0x6sllR94K47mtUim/JSHUwvMM5UCvfv
                                    Xtt9/OHz9+/CyC2MrKKnbUqFFzevXq9V/QkYS4uDgzzrzNmzdvFBqX4Tb1KJVBP7ajMc4AeAU4+6dRQF536tRp6/Tp0//gUKh8D6UiKMZbUh5DuCmGVbNUvDoanK4COokxlNCnGBqXQnlZCpB8A6DGI58T0ABXyTF1jeK0GoCPj4BUigYQbJctW9YXUmmqnZ2dUJb0AY
                                    RuGOZtRFnQOS517dp1Y6p6SUK9/I73zSEQKf1Gjx79K+plOerlGTszRpONKOvPyGc0On/MpEmTRiCP4ejYJzUjiSn4q7Gw8ly7dq0KrvmeFk3QrKqQjG7Hjh1rzPMAcWcA85oyAhMAKusSqPempUqVCoM0Lj5mzJhx6JAvAE67tWvXfrVo0aLhVAx5Hc791rp160Mo/7
                                    VGjRpdWrJkyefXr193w3X9eJ6m2SZNmpwaNGjQeCjx3pD+DQ4fPtz05MmTTXIaZ7m66hs9+DzAloTKGXjkyBH3L7/8cj0UtMm0m3IqFlLRDMObOXpzIQyNBTE0WgAgfqi0ID8/PzM04GlIU9m05uDgEIyGy4+KOw6g3BLvCAkJMQUoQjw8PC4ohsN8GCGCPD09r4r/0F
                                    gJaKx8TZs2PQ8F53nz5s1PxMbGmsyaNWvQxo0bP69SpYr/qlWrBhNUOjg5o5GaokPYgi4VR2fT//HHH+eNGDFitbgG+TcBJTLBp5UoC8GP/F7UUS/n8MzXqJcBR48ebYB6WYN6mcZ6IQVAHo8/efLEYMWKFX0AmpbI221I3f4AX4zGBcAN//ng8GUIYAgHY9SlA8pdBB
                                    0gDIAbXrdu3buM5bFr1y7nbt267QTNuCfeD6mbjPsSOVJwat7f398CeS6BshVDPb1CR53Wp0+fXYpRJaxMmTI+ixcv7rdw4cIOKL8F2xRlu87zeOd9tM9VKIW9If0502uJa4ej/i/mNMb+vzj4i5gUjFfxoSXmjXwVnSLlQ6sXzogyCA0nPD6UFB0drQ9unZyWdYSr1r
                                    n7QG4ldcWKmvJUUt1H1aQCWk1qUgGtJjXlQsq02Y4+CadPn3ZLTEzUa9y48TUoMP8y7tOVkxMeSofvV69e6dFfQPrfVDKUd70kW1vbtzaxjo2N5dSpEZ3iOWkAZeKFMiIRzplAgy9kY2MTra+vnywUpWPHjrnRLl2/fv0bBQsWfKl4njHdR3G99j0ajzMqfa8SEhL0oY
                                    iZ6ClmE2iD5XvxXNnuTT8GcZozZnwmzidxqhoKjwk+5OexiEWLFtXpCxEWFlb40qVLZZycnKKqVKlyV1MWfVpVaApLHcSczvG0cFhYWMjT/k+ePDHklDKufZV64gPlMTp58mRlc3PzpAYNGlxLHaAd5TP09vaujHy+YnuJRQ1sD5YF5UtCXcqKFG3ydHO1srJ6jXpPjo
                                    qKMmb8vAIFCqQ5gfPs2TM91iHa8mUqDBijvjj7qkd3STzzhTKEGWeFUS5jUffU5ejlh/y8FPnx8/OzvXnzZqny5cuHVaxYMWM27Mz4mp46dcqpePHi51DAmyhooIODwyVUVnnlNagEFu4SGm4vNXKFU7w97vNFxd9AJ7iOBvPDNTv37dtXSVzTpUuXP1CRN3H+Kp5/o2
                                    TJkifXrFnTVJw/ePCgB57NYCyyk/+NGzfsK1SowJC3twFQfx6bN292F9d36tRpqZmZmR+usxX/ffvtt99Ur15d9sn+9ddfW+F9d5CnWzwAhtuoeG8832Dnzp2NS5cu7YWOq/VhPnfuXBmA9gzOW967dy9/4cKFz+E+ukleZ35dXV0Pbtu2rY64npMikyZNGkLfFOTtBj
                                    6Dv/jiixU0q9EJHu86u3Llyhap6s8czz25devW6vzNDlunTp0tlpaWvlx5o7z28OHDbgD5Fbzfh/VaqVKlg3fu3CmiqC9XPOsq6wUguYPyeKNjOWp8uu2Qn/PHjx93FNffv3/fGNce27hxY13mHW29c+rUqT3Sw0Tv3r2nAIghEHLOyv8bNmy4Es9nW7KT3UC7nZs8ef
                                    KXYjHBunXrWuE+bd2zDUuVKnUKQsRU4xM+HOeDkZ+LaKPgPn36TGKess3BnxlxcXE5Urt27f2cso6OjrZo1KjRFjs7uzPoofriugMHDtQxMjIKB5CCUHmlxf+cz6cL4vbt2z3PnDlTkY7kvB/XhkCCFdRUwhGAcCXOl6ev8vDhw6ewMx86dKiqZjXF5wBOAgGt2Zt7H6
                                    TSbk7NAiT5Ro8e/TPeQSd7c80CgD3ss6ic70Q+Bg0aNBEN5cXvv/zyS39cH4bn10bHrIMOWwfvrkbphQpvDzBEcsQQ9+IaV1Q8sBhTBMCxREVHb9iwoT3L4+XlVatNmzbLIXBibt++XUxTF9WYf9q1GXzm2rVrpdHA90aOHDma593c3I6hvEuU9YyO1BDPBbbuW/B3QE
                                    BACQD/Ou4LRGdtrlgYoA+B4o2GnsFFBLze0dHxPJ63WHH+ctOmTddzNdCtW7esypUrd6RWrVq7WXdXrlxxQt4S0A7lxDNRjxytIv/888/PNK68fuPHjx+WFiY4gpUpU8YbbRg8ceLEb5Xn0HkujhgxYjbqxvXEiRPVxowZM5KDwOrVq+Vn//XXX/1QrjDUubbugZFqtO
                                    ljxHHh6iHURT1gy2D//v2sxxf4rJdtgEZjcO7+KaRCdfEfgFCJI2J4eLiN+G/YsGGTe/ToMZMrUwCYwUpAo4LuoyNorw0NDbXicilG9uRvgPPQTz/99NbKiqpVqx7Fs1ZpAn+34Bo4zowFBwdzvV4MgOQqrsVQTSef+//9738/E8ugIOW3oCG9MLzJwBwyZMhoNPxBfo
                                    fE6IdRw0cEIFceAHQ7SJW7SkCjk7mgo94HgKwJaJQnLCQkRNtpMcwa4v0x8+bNa8vfANtvNWrUOKh8Lt45FB3qKr9Deg+FxL/BVSvifP/+/f9Ts2bN3eL33Llze9StW3fjwIEDJ0IazhX/0yeGy9UCAwPtxX+//fZbR3d3d3n0OXLkCH2RX5w9e1abP4weDVFnj/A+4+
                                    vXr9uT3UBIOCsBjQ5+d8mSJfLqGEp+AHVIWpgAUN2cnZ1PokxfVatWbQ8nx8Q50Kvzy5Yte+telOtY165d/9AAui9Af1XXc3/++eeBaPfjyv/QEZcjX52ybcUKuEwFfCRyhk4xwxUI/uoJ3vNE0BdIpYaQjF6QDGfxvVlqOzcd9LUaqb4+G/I1Pl8K/spQtcrrMSJ4oz
                                    PU1lwvPwwS4TUaqhx+vyK/Etdy1QoqOBwS2k3D0/JBYu2AVH26a9cuT81lSj8Hmb+9z/6DivIYKPg36+ANeLw8uwia5Yb8X1Nej0b1Z4gw8mRI9IP8TickcR4gady+ffv94vfRo0c9OP3esWPHwwBpXYKf/2OYptOSIeq/hrgWwmQbJO4AfkeH5zrLGE5li/Nok0t43h
                                    eojzdctJtVBQx0sRlnIrt3774bI0lpCKjCSl2E/jfK68nRRd1I6XgKQkeJ8ff3LwtBqZ1hgvAcgA69NdusHKgAGwzBL0AxtE4rkG5JTZo0Oc/V2PwNXmmDXl6CK62hoJ1FplxBBUwVjU0/AwuQfXNyue+//34CpPJRLvJM672cxgZwCwrKrwF2MqQkh3W6Vj5TAgoSNA
                                    ZAstVUoB7y/KZv374bFi5c2F9z7xtFh3oN0FvPmTOn2x9//NENkrX7pk2bGmRoRup/uowe+LlcHkg8u3Hjxk0Ep78KQJ6h1EcDWwM8b0UPpQSn1+Hdu3dtQDnuoBNGYeRpxHMAhQ2AWJLbYvB3fHy84cWLF6uijs5AQvmiLq1wDamCvOyrV69eKzHirMeIOAujnAtdNh
                                    mOV6MsFobweapUiFGXz9Fe51gH9PnIKqDBv5swb2XLlo3BsxOE4NEIiRS6IQADrJsi8+fP7wJBUxigXK05/xqd2WrBggVdWfcYXbpD6MjL19DRD4NaxkJYXZ4yZUp/jIaFWa6MxMU2zIwkouad3qoD+iFgCH0AqfCIy4hwfRL4UPW2bdt6sxLpfITM7qZkhXbM2MqxqI
                                    QGqIw0d9GB4qjLY41e5iaatXapp11fgyaYKSwjBTCMr8HQOR4gssYw+kwBrlcAl/Xy5cuHEqD0zwZFOI5h0VuMBukAms7uRpCcm1GOFyhPEXY0KGINCRz6e+A3HYZSbxrPstL1Mx9HBoD3FGicJ/j/agCkARouVoQ6AM+Vnaega5zhVnNo4CBc0wjDsTxKguuORwcKAC
                                    CGgst/DUFyCt+/RRkYzsAkjbWI2ZIAzgJ4RxlQh+800v8kKE0L1N0+jbB7NmPGjB8B5L6oV3PUsyOU8M4QdPIyLIabAD+2RhmGaawxBq1btz4BfJxCR4xHB20GKjMCgJ4I6jr9m2+++Quf/wEbeJVddug3NNVxWwQFWPSgbBRFZmRPL3pUAcQG0Ny7MGYDMm0kvLzYId
                                    CALzB09PP19W2L/5uDG16jgxLAkOaqEHBESvjU5jCaghI1Q1rqMtBkKFxKmV8TDGEvKUn+/vvv3lAkY8XSLXSwfFS2Ll++7A7J544Rpt7WrVvHafKr944Ors/VNHv27BnC8oAqeDRv3nwfyrOZCio7PvMoKRY0aDoChQglpCw5eQ/jamjMjx4AxhnkSQYiGtUddWYEZb
                                    Az9IIu9KjDMK91v8VolAJlazWkem0u5uVSss6dO68nlwWnfaFZX/mWqQz1WYyf6XVYHWsy/5UgiKrgOUWg0DVg3tCBLVCOBiyHxtRoBi68lHWD0fgzdNjvoR8tRplIXWWvSAi926x3HqAX9ejGKp6PjvoQyvRPKFN5SO+RixYtGoPPb7KNckDcP8Awb4aeqXWCx3BiA6
                                    lx0sfHR1ZMkPmaUPrM0JOG4RjOiqUEFkM0JQaGp1tQBm5j6LuCHjgeQ3ZtdAqHtN6LgtLJ/aGSdxFMGAkiuRKDi6sVIGNPt6pcufIDRePIZUQPX44Kasswt7SxpubRaUhherulKIbRf7U9tHyaw+6A5/qCsoxDAzhDcrnyWjRYNDp9sVTUrTDXOIK6yZ5yHh4e3mhc03
                                    PnzjlDIlcDwA8KfQQgbcjVIdOmTRuOuhoG3l0Q9VWVPBq0qsTXX389Eu8zJNVAffqsXr26D+rLGc8zxygRCcpTEMO61jANYJVycXE5jnsK0O9ZSeM0UlMuL+r7nXsdQkFuxA6NMg+gMz/yUx7YcASldBACrFixYtyB4A5G2UBI69/RAamEfvGuuodU/wLKcHt+p116xI
                                    gR60BV5oOStEprz/RMA9rV1ZU81xjatXYVNCqLfM4SXPA+V05DubGH4tIC1zTksWXLls7otZVRyYXAs19pJieMxf0o7GMumkUjWwnJoKhoOZ06dapZixYtjgtOrJkUMAJoA8lF0cCOygkJ5MGOfswKQMvSv2XLlufRUM+gKXMb5BdK6qBrH2862KPhC6GM2vxCgttyeR
                                    TueSbqTlkeLuLlypD79+/LyhGowVU0fGXlc2nGwnWR4Layax2pGUB2E0PrSEg1c/oR83/G+gC9qIeRrg84pFyfkIZNuJoFQqIiRjXTpUuXTleuskEdv/5f9bwyhHJ8FaAqxBAN4jzyVRbc1BRDegJ90jWjmXalDN7PBQ9WyE+cJlA72+Nfk0WUwnTgB42bguc3Qt7cAe
                                    SG3DHMy8tLLFSgS7DSAMCtOMKQX1vFfzopEfSGZqAiw98ado2MkpD1V+/asCnDgIZkfQBudmTUqFHzIJnZExnH4leAbRd433P2PCo44H8PxVInXB/IVR3g1k2YITroK4czZC6Rs0mcEdIUUJ/mpAMHDlSg7XHo0KE/YzgqB8VnkQAnAQQJZASeHgXKcmLs2LGzqGxAGc
                                    0/adKkn9EAzyH1TmuAb4yGMdZUiAQ6sAFSsAXyYSQ6EIBhg8Zpgvw3AX1oiiHdHRLQCEMefXtNMAwOJYjo94x3TQV18UaZXhA0qctDigHAp6B+ZCnVs2fPdainegBeO4xcpgBzOfDIUVDm1olt2tjQ4I77UEdfA2gR6Izybvdnz57lBI0hOKevqE+U+SlGhNs7d+7sCE
                                    oRRIUZku+nsLAw+i8XnjBhwhRccw0dl6HJ7mH0vDBy5MgFyHsJ0ConKOEzuFgAI8QbdKRYHMFQiEeg/qxwFIJS+wv1GvwfqNm1Vh+CqhbqxRPHZ5CQLbnKiHUBfaQc6NEJkTcKBU9Pz5O4rq1G+BgrLUCa9n6GfIjRWA/1WgTXa+sehzsVYW6Aik5Se/369c044oPOVU
                                    LHHgg6tfWd+zFmZqYQYCiGnn+CRm8cEZDMe1AwSw71nTp1mktbaep7kLk5AwYMGAvuZo2KOomKK6YwzOtVrFhxHypSNt5/9dVX88EfbxQuXPiKhYWFDxrnyKZNm+qK6yH9uaIiALTBQmOLLYb7jzAUFwDiD6BdQ+Vor4cyuoJasiKEVUEM9ZchrX/nbwxtn+OeAHTEAE
                                    tLywB8D7S1tb1A6wTPL168uB2ee4uhrhiKDJ11LzpfUZ5DeQqXLFnSC9JTa+elZQMSdgM6+s/K6FCc8eJMIhojqH379ks4IaGsI0hiF5T3JqjFAIUtdnirVq2Wp65PXDMYQPovv6Mj1uVMKEAYwIMTX6B/Dgq7eWlHR8eLtM2zvRiOi8uslDONGC0Y7ov1F4jvFyBI5H
                                    kGhl9Dp1iDurmNupEP1HMw6m72unXr6qHjHRSRk8SB/DRGnRwECA3c3d3XrVixopfyPITh9xi1dnPiCroK5xTkeueBzhmI3xeQfyteC8yMJ+PU1Ntt4GgWJ4vehdFM+0NTKcSQ4EKrRa1atQIFr+S8PF6eJCSPwodD9sFAxSdBGhoymo5SIUEmKXUNGTGJygoln97/jJ
                                    jJuDZJ6efAIYyTKpT6gtvy+ej1FZAvYwxpfkqLCd9HXgiJ9UbxH/4y4Hq/1wwzpqEQSk6Xgve+EnnEMJ0P4OWk0DOUN0jkR8PXjXSUR5+jiNKnhFwWwC8L5ZQjWKiueuXED8r1SkgglJN+Dq9Rp8mplFF5ywvWl6BZoF0MTZbIxaipeT75NrizK0M51KlT507q93JRAU
                                    DEuHV6ANtN5CFFCDr6gShtyZrgOSJMQ4ouPx7igPXHdqVVjDZvpR2ai4lZN7SDo4xv1b3mma/YZhpfDhsu8KW+hM76MEPmVNXBX02q+6ia1KQCOu+l0aNHf71y5cpmak2ogP7oEzT+etD4G3t4ePiqtaEC+uOvOH39uOXLlw8rUaLEo+x4Hq0KtA7kRF45wQXl0eCTaJ
                                    jcjOCfW8eyZcuaVKxYcVWFChU2Q/PfOGDAgN+8vLzclNeMGDFicP369ZfSzqnw+dbr0qXLZFdX17W4dz3Or5o9e3Z3pVskFy2MGzduFBc6FC5c2Kdhw4brr127pt0JAOf61a5de5nw8Ra7A/To0WOMcldZcfDZ48eP/wHPukBX1s8//3xZUFBQofTKx0UVbm5uq5Aavq
                                    suZs6cOdDR0fGspaWlD91QL1y4UDwvtnmuR/DPzWPUqFHjAJCH8+bN+/bXX38d0bx587W0KG3evLm+xm/ZqFChQoxvnIL/tKDgsigbG5vQ7t27L0DqDnD+pKenF0vAiWuGDh063tDQMAKdps3BgwfrNm7c+B+A+yJXofB806ZNGRkpZfr06f3EPX/99ddwa2trX2XHEA
                                    c6zNdGRkZ3N23a5HHkyJGaXLXBFSq6wK/ojBNoBWvVqtWK9Orh77//bm9gYHAfn22PHz9eFZ1gR5kyZU7QpKYC+iM6fvzxx7F0wVT+B5DsbdSo0SbNhEJNZ2dnrw4dOszt27fvHAWgDWxtbQN27Nih3f7hm2++Yefwpb2bawgB5vCFCxd2FuchienTGL1x40Z5NYmnp+
                                    fqkiVLHq1ateo+MREAakIpeTo1oGnTd3JyOgEp+pVixUoNLpd68OBBPl1lYz6qVat2EPkeZWdndxrXmaZVDyjv1t69e09STIzRqT/04sWLtnkV0HmSQ3PShbtHKf9zcXG5cffu3aL8zoUHNWvWvNmvX79Np06dqis8xBScUzs7ZGVlFc+JHk6oBAcHl4HkNGvSpMlZcR
                                    6gelmuXLnb58+fr6OZyMgH2rKXS4kgwd3FnIL079jT8iQJI/QDpFpHdiiZV/EsT25joatsgYGBdvRX+e6771bhpwHAWS0tKsmVKXiH1nmrSpUq4aAcTSClY/OsbpNH9QLOaGlnDBnT7dixY+7cmoG/9+3b14QLEHD4REREWPv7+zuJa+mY7ufnVwSgKgreXQ3SutugQY
                                    NWcUaLzkn0SeFm88r3GRsb36djvqYzMDTW8549e25dtGhRf00H0wloOqz36tVr58SJE2f89ttvPRnXj3vE1KhRI5h7y+gq2+nTpxtgFImqXLlyFLh+wKFDh5qn0akZ5HH72rVrv5syZcrg0NDQQuzo6Mj0AUlSlcKP6ADnHVmsWLEQDOXjJyCBXhykP8Ply5fLcIEvfQ
                                    hu3rxZUrNQ9fCcOXP6aiiAHqTtNa4Et7CwOA8APKS/dEBAgLVm5yhy0kjuTqV8n7u7+8p27dpt5Hd0mq1Tp04dhWug4xW4wcXE69at68oV7Lo4NEMJDBw4cBrzhyP0yy+/nIm8FUmrbF988cXf6GBT+f3333/vWbp06eO6nqvZ3UsPfHs08sydECLbt2//B3fuystKYZ
                                    6U0PQ34JL/9evXV4I0dmXET0jcuuCed0ADuFcifQqSGN4AgAgQwb4p2OLj440BlIkY2j0huauBh3q3bdt2B6U8FLsX9NvQS+XD+Pz5cyPlfi+4Nh+keAJ4u++ff/7ZHZL4aVp5pbRcunTphJCQkAqzZs2asH37di50PUzf89TX0g/l7Nmzte3t7QOuX79ui3vv4r5SOH
                                    RGQ+QCgLlz584ODw8vjzJ9x8j9SKcwmhRRJfTHZeUYC1B46To3YMCAqcQgGjuQsUW4qSWkeQDdFmlZKFq0aMDmzZtbKTzhnHF9Eh3XIeGrMa40AGSlfCak/P5OnTrN10jobePGjZuk8T5ritHhKJVIxvhILUkZ23rTpk21uBhU/AegWqFzPMb/TVPnHXy5LDrUC4aIQN
                                    5vYfRgGOE3GAFapL6W/Hzr1q01goKCtHmlbzfuC8dI01OV0B9dP03510QCAXv48OHPQAnGAqCeAI8nANv80aNH5tyDT+Frq6+YQKFXG1ejm4FC3KM3ILdfUD4TQLGvVauWcssy+d2ff/75cXr2AZye5ubm/9rVCpLdpHv37jt9fHy0G/ZUrFgxxtHRMQJ8+l8xc3fv3t
                                    3CwcHBF/lugsPj6tWrzdFxNwG47XWVtXfv3uupAIv/uGC2fPnyd58+fWqpKoUfmVKoa10cAOAI5cihTZs2OyAxQ3hw0SaXhIF2tBR1AoDqA1Bc/pUf0nqoiYlJRIkSJe4xwDjA5rd69eqvxTM3bNjQANc7enh4HFG8WwY0A4lD6dt86tSpfpKO3bRARZ7jecEAZEfFlH
                                    odBhsH1fHhb3TA5uh8jH/CuCQtW7RocQj5CNXkPxSg3Y5O2ZDBfgBiAyixbaHolqBVBgrgda4aEsuWqEOgDio0btxYttKcOHGiIWhITZVyfODHyJEjxzKeR+r/p0+f3sfS0vKtwC48hg8fPrZMmTLHqUTh8zqkcgiGc1+Gp4JU9oeUq69wiq/OaE8A06FKlSpxX+5HdE
                                    YXYaoAou2jR4+eKa6ngseVGpCMXrqUN9AFdy6YwPOOQTpvw7sjBg8ePEacR35ucOsObjOM94ZCSjdS3g+ez9HiITpNeS5N4yoggLiTJhBMReYVCulpPHsLQ3Z17dp1tgjHBY5/okuXLuvyUtvnSX9oSFZbgLNguXLlbin/B5+042IDV1fXIOX/oBxcwmQPgPrjGmdIOw
                                    73nE176eTk5I+h+q1QCn5+fsX27t3bnlsxlC1b9niHDh3OCbrCuBmMVwKJrt0Zlg74XLvo4uJyW9eaOEhgR243jOflA3U53qxZsyviHDpEOSh/8TiiAd4KAOZNzdpBrS3b19fX1c7OLqJIkSJxDG4DAIfi+jiN3dqWy6ISExMLVq5c+XSrVq3OiHtBncoA8K9wfUheaX
                                    vVwV9NKodWk5pUQKtJTSqg1aQmFdBqUgGtJjXljfT/BBgAmUMJhnJa78IAAAAASUVORK5CYII=`, 
                                },
                                //posicion 0, 1 => titulo clinica medica
                                {
                                    border: [false],
                                    text: [
                                        {text: 'Clinica Medica Especializada\n', fontSize: 23, alignment: 'right'},
                                        {text: 'Numero de puntos que descuenta: '},
                                        {text: 200, fontSize: 50},

                                    ], 
                                    fillColor: '#8b0000',
                                    color: '#fff'
                                        
                                    
                                },
                                
                                //posicion 0, 1 => logo pabón más
                                {
                                    
                                    border: [false],
                                    fillColor: '#8b0000',
                                    color: '#fff',
                                    width: 80,
                                    height: 75,
                                    image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAACWCAYAAAAyqA+NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAf/5JREFUeNrsXQW4FeXWnjnn0B0HCWmQUEQEUbExwcQWFfVXrthcDCxs5YqKiY3iVVFAQDEBi1YQ6ZDu7o
                                    5z9vzvO6y1Wfvbs+EcLPCeeZ797BN7z3zzzXpXhx8EgZd35B15x4FzpOVtQd6Rd+SBNu/IO/KOP/HIyNuC/f9Yt26dt2LFCm/BggXesmXLvEWLFvmbNm3y5s6dG/4/PT09fI/FYl5WVpZXpUoVr1SpUl7lypUDvLxatWp55cuXj38u78gDbd7xBx47duzwZs+e7f3yyy
                                    /e+PHj/cmTJ4e/r1y50tu8ebNHHwTB6ft++OLPaWm7FCb+j39TPwV+9jMyMrzSpUt71atX9w477DDvhBNOCI477jivRo0aeZt9gB5+niPq7z8oRUeNGuUNHjzY/+mnn7wZM2Z4lKQKTEpIvhOc2dnZ/N3nO59dgQIFQuDyZ35u+/bt4WcJ1kAeLj/Lz/Cd/6MUPvroo7
                                    2zzz47wMurWrVq3kPIA23esbdjw4YN3rfffusNGDDAHzJkSKj6qqqrQAXQ4s/HfU7yu58vX74QjCJZPQFzwO8biRv/Xv78+QN+hhKdQM7MzPRatmzpXX/99cHxxx+f92DyQJt3uMeUKVO8Xr16+Z988on322+/7bJRIBVFMvoqNc1z8S3o9G+qFhOcKkFVEquaTGzrF0
                                    SlDvRc8vnw/9u2bQuvf95553l33XVXcMwxx+Q9qDzQ/m8f3OPvv//e69atmw8VOLRNFagAmW9tUQehST+bz/oKeDqfeCho+U5pa04VmOec9HecI/zb1q1bKYm9Dh06eHfffXdANTrvyAPtXg9KhPXr14ce04ULF4Zq3Jw5c3wSFAl0586d4d8KFy4c/3y1atWCYsWKeZ
                                    UqVQrtNb742b/74Fr79+/vvfrqqz5tVoKLNigP/BzuPQDmu88jCrgK0lSi1zII/bcBbiB/V/Am/B17GBDoCt4tW7Z4hx56qPfiiy8Gp556ah5K8kCbeCxatMibPn166Cmlujht2rQwrEHQ0u5TdVE9plEEqt5TArd48eJheKNOnTqht7Rhw4ZB/fr1Gf74SyVrnz59vB
                                    deeCF0LHF9lGAEqrkHPwfvLogjJa9I1gTAWqDq7w54Axe8+jtU7oAMhz8/9thjXseOHYM98Im8458OWgJx4sSJVBf9H3/8MQTpqlWr4s4UtdPUKaOgzZcvX7hWEpPaZHTCAAiBflbVRPWU6t/LlCkTSo5TTjnFg+QIGjduHILozzh++OEH79lnn/W//vrr8F4oWVUFFs
                                    bjq7Q0gOTP8d8dkPq7BKYfKYkdyWpDPoGxaxOAKyANBNBJ/7cqM6Xudddd5z3//PNBiRIl8hDzvwJaEuvPP//s9e3b1//qq6/CuCPBpwC1BKnEZ6UIASiOmjiIRZ2Lg1iljQJaDwA74Hf4OZ6HQD/88MO9M888Mwx5HHXUUX+IKj1z5kyvc+fO/vvvvx8PxRAXyjzoCZ
                                    YQjq+qrgJWgak/635YaWtBqoAU8ejLvacJuK1IjIPSAXAsCsAGyHHVmvtH4J5xxhnexx9/HJQsWTIPNf9k0K5Zs8b77LPPvHfeeccfM2ZMaIsSNHyRJlQyGimRJEGM9ImD1ng/PWuTRXw3Qa2j9FBbk9fmOih1L7/8cq9Vq1bBvqjQPNfrr7/uP/nkk2G8tVChQiFzoH
                                    SV9SVIUGOb+ga0afIc0gzYcFsxIj4bjC0f3gsxV0J+pmFcCN/JkBPxc5txT9vwt6343nb8LT8/b/bBAjQmP8ccaRtEfDYOXIaGwHgDtcvzjn8QaOk0eu211/xu3bp58+bNCwEkamKCQ0WlilUdI2y+8H8atzTOFN9IBQtw9282dhK4ACYj4boqVKhA4Hr/93//Fxx55J
                                    E5uk9mLd1///0+460FCxYM/2a8wb5KWHE2uZIzzVGNs/Haic+m41UK+5VZtGjRmjjvEYULF66Ejx6BNRfDPhCMvFhhvOcTsJH7bcS1t4CJTN+4ceOo1atXf7dt27aF+NsmAjhtF1cLgcplKXhlT2JWAitwjfQNgcuEj5tvvple8LyQwz8JtAMHDvQeeuihULIa+zQqjG
                                    GlqoLXN/ZZgucj4v9WTbSfSwhvKJDduKX9mY4XMgb1StP2veOOO4KTTjoplMbuQa82wzcvv/xymIFE6YrvJoBV1yqgTTO2qb5TulKa7kin+MyXryJUz6awG88FUI8DQDNhdxfOrQNIPw+wbgVof1u+fPlb0AC+xu9r8L8Csr5sAlYkrZW6sSj1WfdKJe4bb7wRtG3bNg
                                    89Bzpo6UwiWN988824A4aEbHJjE0IXhngtGH3HM5pgojmgiAM0wmPqWfXOOloMogPXacPzkclosgHt3Ysuushr0qRJqH7zXuhAe+utt7wlS5aEYKWabe3VCMdRCFD5OXzH53fibwRr2VKlSh1VpkyZ63CukwGKMuqEc5lRrh+spEBK/HXusmXLnsWrH8C7Q8CbLSCNqf
                                    TlS//GQ5IvQolrTJCgSJEi3siRIwN66POOAxS0w4cP99q1a+dPnTrV4wOFiuabEI0vhGrVX18IPclT6qzLBW2U9A2iwhxGVY7ynHpW9dPPKGEKcAJKXvGkxkNOkvsblRjhO6BNAiylKn7eXqxYsXoA6+V4XQppWtc44/6chyz2/+bNm3+EufLUmjVrxuCahQWo2fqugF
                                    Up7KrL/JlaCbUL2rf9+vULojSRvGM/By2kjg9VMnTIULoSsBZwDjErCtP0Z/t/F7QuAEVq67nSVJLsCajWMxrhRY0C9a4vSQK+2r4afpLyN99hJO49WAcTX3RxbwNYGwOol5QuXfpqqsN/damcaAtr5s6dezek7mf4vZCAVtXlbAteI4UTnFN4zgGzunr27BnQiZd3HE
                                    CgffDBB/2nnnoqlRMmQerYsIbxovrGMZIlhBJKJtp54kApRE0NfytC7OB3Sqst+NtWqnoa9lBvqVF9XU+oJ1IkiABtoECVZPuEsEcKVTXBCyzOJLVVw3eqmPh5C7SP+mXLlv0XwHoVVWCC5+9KVpD72Tp79uwbANxBWEthcWQRrHSGZYs3OiY/x+1cw/hCBtqoUSNvyJ
                                    AhAc2EvOMAAO3dd9/tP/fcc6HjhpJH1V83YUCIOk1+Dj2YoiZmgWAgyDLKgajLQU1sAIKujN/L4H+ZOG8h/K0ovluWPhC8KhCYeN+Acy3HOVZs2bJlLVTYBbBBF23atGkEbLcFDHfgMwR7PiHSmAVmCuDGCZJ2nNq5bsgoau+M5hCXrqL+b4ZEKofjX7BZb8S9VPo7wR
                                    phVqyZNm1a63Xr1k3AuvKTaYqdmy0gjqvOjsMqBK06pXr16hVccskleUja30HLMEfnzp1D+5XOJmN8+kbtTVPAClHz2AIpVqhEiRLNAMrm4NC18X4EVUWAtbB1oORkXRYAUMvXALij8ZqwYcOGgXhNlHhlATIHG9bQ+KSRxDEbv3RtX+sIS4hVGTVY3tNxTRL/DgD1Eg
                                    C2I/boiP0FrK6qDNv014kTJ7bB3m2U9WUJUOOSl+8K2kDc3aKJhCV+LVq0YHlhXprj/gza//znP/59992X4HBiiqHYeda+U7DyM1sAyiJQEa+EingJvnsKfvcdzv9HqH3qLNoO8A6DFBm+evXqzyERZuEjGZQoRtLGTHJBws8RnufAWZ/v2OPhveK6lK4VK1eu/BQYE+
                                    1Wb38mZjrTlixZ8jhU5dfEvt0poN2pgDWvmOeEgghe3uMvv/wS1K5dOw9N+yNowVG9Cy+80KfDiaEOEi0BK7astWEJ1nSxU3cArJdkZmbeCrAe/2d7Sq0k4XUgTVauX79+4MqVKz8GiEdyffhfAeslNY6XVDHKwEmRdJ1NdPBshnQ9q3z58k9Dg2iggP0jvPOWIcn5mP
                                    m0RexLahHF1TRxanH3el6se9mECRMuhmmxWJx8WQLeLOOkyjaqcqBSl6YEPeyvvvoqowd5CRf7G2jnzJnjHX/88T4klz7sBK+pgEG9pXTCbC5YsODBlSpVeqxkyZLXENx/h9TRcAdVZYD2u+XLl7+Le/iWdrKozYGVJI7tFnO8yy5gfVGHs3Gfd4E5dYL0KvhH5DKbNM
                                    0ANvtMaA5j8JoLJrQKTHIFrrteQJsfjDAT+1se0v1QaDKtyJQ03XNvB5no3LlzOy5evLgnvlfQAFbBm6AmW00l1KezsgLGsnv37p0H2v0JtLRdzj///DDZXxIKorzDaepwojoMoDavWLHiC7BZD/urpGtOCJSJDQBtn6VLl74Nu3eSgNf3nFilkSqBkwrpGa1ie/78+T
                                    OhDj8NwLTm+X9PGMdI0x0A6pQ1a9b8CC1hysaNG6djzzca73q6l9j+Ni4JsY4TatWq9Ti0obI5ebZkDGAGwydNmnSDtzslMgQu1rLT2rgGtAlOqYMPPtgbO3ZsXjHB/gRaJsQz55R2LDi9xl/TbAKBBWy5cuWuq1Chwisg6EL7Y9tOAe8WSN2X5s2b9yZtUWPvZlvQqr
                                    rslL/xPrdBk6hRrVq1D7AvjX5vkoG0jVkHkA6BndkLDGU2w1r8F3OMhTG6Ul8lf1wD4DnALO/HutrkwqG3FaC9GMzhN2FgOxlbxt+zBLxZRj3OtiYElSsCf/jw4TnO2c47fqfpt7cPsEj98ccfD3Nw1VNs0/QkHukLYDeDYG4DYN8mYPeH7hGpNAcchbHOe4844ohepU
                                    qVOpJhKFHt87F6RipoMqRSJkOkG18ZdHQVLVr0sBo1anwJTeJ3AVZs702Q/r0mTpx45dSpUx+FGv+blB8WYuhK1NFsK/VS/E6mkx/26TimYuZiDYXAgCoJENNUa/KSk0Y8L7F8MDyYITVr1qw8NP1VDsS9feC5557zoUqGCRTSQCwp84e2LBPUy5QpcyHsuudov2r96/
                                    56cG28H9zXUfXr1/8ENt2j8+fP7ykaRD4jbW14KNQkoII2hkr4MQl9X4vp1WaFRB2K674CCTvTeLjV+RXl0Q6cqiZlvr5xpMXrjnMB3OKGkacZJ1sScG0dPyUzF7Rw4ULf0QDyjr8DtGwD06NHj7gda5tgG5uWD5b5tE3Kly//LgCbIfWyB8QGSFJIEYCwC0BYCxLjad
                                    xrliRnZHumyIBqNCRr7UqVKn34ewArjrGls2fPfmXZsmUDxYlX0IDOdfjEUwltwofxZKuty89vx/7XVu95Lp5DPtcr7vgtkmqetcBfHZV5x34AWuYVs8mapikKV9Xwjtqx2SDe0iDkHvhccRLygdbhUaUuUw2ZxTRt2rT7YApsVzvX25XFtY1ZTZUrV+4BJlZlXwFL25
                                    X1rmAOT2zevHkJwSqASKiyMQzDAjhwcqsTwmzyTGJ4DtVtU4AcHtuc7hdJarEJK5HJME7raz8pZkflHX8zaBna6d27tyfNsBPyhe1DpYcxMzPz3yCUegciYF1bFxrDBXXq1AkIXAjcmKjKLKMrWqVKla5FihRpsC+AVc/wqlWrPpg5c+aruFaWJDRYyWqTGLIjYshBhB
                                    NKARt6ncF0amGNzXLjAOQzo3daHIp+xNoT2rcqQ7BN0tmIL+/4mx1RLGaHnRcvArdRD293jHInwQobrz0J+Z+QykZCxP20AnAfN+mYXsWKFR8EoE//HYDdAtv1SZgcXaUEMMM6k9RT6yWGXGyiQ8JLElcSspbwt02lSpVqBeCWsBMGcnDPa7du3bpIVOR4ixzbq8vGfb
                                    XaSfeL97d8+fI8NP3doO3fv3/IYJmqaB5kQnyWKhJUytsA7IL7k+NJejT9ru+zhK5q1aptcU8bypUrd32ZMmXakIHlVu0U+3XRjBkz2i9atKgvW8UIc1OgWS+wBelOLznRQX+2if3Zu3AU2wJ7u37JkiUvzk36JNcHdX24ZESlC5OJVzdZxuNKZ/2+SlqW6+UdfxNo2X
                                    d42LBhngFiQidBAW8M/68I++7i/akQ2syz+d12LuOvRYsWPRag/bcZ3ZErwG7fvn3mlClTOqxcufIXqsMmfKPgy4qSpEaaZjmfdWteafdm04GPdXaA5lM2N45A7hdMoR+1xHFPn9N9sSmd3BNejx02dcxJ3vE3gHbEiBHhaEWbyaQqk3FI7ARgG9MJtb+FdwDamNOGZp
                                    8Olv+VL1/+fhBl4dza6wQss5pw3MNECWO/WgnrqsRWytLm1XK5LGvvunYujvWZmZlXFy9e/JzcSFlpRTMddvZoVkN5KZoC6LtKX1u1pBoNc9FZTPJ3PnfGptkRk1EPMhAyEmgRXk5TOg9oR9Tw4cN99ag6LUytJ5GjOE7NTWL8HwGkHFwjm5lEeC/6e6Q1CGDajh07Cu
                                    MeG0kP49wCdsLUqVPvByiWsxzRMzWqWrvqpUiQ8HZ3ktD637AVjm0apwwXf98IsJ4AM+UBMpbcMFAyZWhVHwBw66SIIqlQwplQELdp9T4FuD40kqBv377sZuk/8cQTQcWKFf904qVKzn7ao0aN8sePHx8O2ebf1q5dG/6ftIl98Q466KBwsPbRRx8dzubl5IkD+UhKY+
                                    QDad68uc++T7b1p4R30kxnhoLVq1f/AbZfg5yoYzod4M/q7G+vo3N/cgs2c2yByvgliPpcEGPB3KibAtiZAOxdWMcSAUMUOLMi/uY2W7PNw60jMHwOzMyCCl+7SpUqfaD11GBoLjfrhA06atKkSXdKozllJirxd3i7849dphKX9KavVlimR8nGsSw33nij17Zt2z8cvL
                                    y/oUOHsnF62LqWQLVe7SihYB1neJ4egdu6devg4osvjoczD2jQUi1u1KiRz3cvsfs9CSVMVJca2jI1atQYU7JkyXJ7k578P6RWwAQNdrr4M1VpOzpkX0ArozBGbNq0qRQkWP3cAEEk4uqJEyfejHPMSQHYVO8JxQpecnjHM45AFttvx9oqVKtWrTcbCeS2gTjWtg2MpR
                                    2k0niJR1v1fIfxYO80vaPcvOxAxofEZ/8QvFSV+SJg2T/spptuCgiW33uMHj2as4X8QYMGhedXe1q82/Eme3bEjD4XzZHmZ5h2SRo+4YQTvGeeeSZo2rTpgW3TcrgxASsEGNeFnX6+/EdJvBfNqbor/ZL+mpvKfWJB/OGCGJZAAm2iJzY3oNewDuyoB/cC2KRXTgrOjT
                                    MozEADYA+qWrXqB/sCWKrFS5YseVsAWyBKgro2bUR/6ThANFtOTKqQVJhFRzrq2LEj+0j7dGzu60HN6dFHH/VPPvnkcEYSwUpmSk2Q19brS+pmUmKINuNjJITv1PbIREaOHOnxnOxhfUCDlgUCOq4jws2vTih25CsiqXc5kn4sirfzdv6sQxgN7dotVl2y1+X9KTc2f4
                                    9BG5i/ePHi/4KomxAIuXHo8DVnzpwnQahjcgNYI2W19M32s3Jb3YSAhXRhosf7UI2b5tbc4J6AqYwHc/5Iem65YE2QpF5EPrEDjDRT6eWrjSuhQp+VYePGjfNOP/10NnfPNTio/p5zzjn+I488kjDQTBsvRJWGEswmey/N0RhDALNajefiOW+77bawhdIBC1p63yK6NC
                                    SBGMRSAhwvxyKNasyfVKbH0MhWXRtBi3VlAzwvLF++/EsQT0zVZb2HcuXKhbNsOQqERCUq9VpIyafx/2Mhvcrk1o4F2F9dunTpIGFkMS+5EicOUttETTsgutlPDsPwxSzZCglTHipxL4aicpvQwnXiPhfOnDnzEdrDQuwWtKk81HGNy3O6aUa80pjeqABhZZiCg6oy1N
                                    EcL5h9tM8444xwuiIlo0pVb3dWnudk54XvpEtbpaQ/W/Dy2XJtZODUCp5++mnv/fff9w9I0Eq1RnxcpHqRPTMPVbl+bhqW8bP7qrbu6QARrgNY+m7cuHEy0w5lwl5+/H09gDuNHNWuU6UiPYzM4qF9I7NqipUoUeJk2LHH5ia8Q0a0Zs2ar+fPn/++CZukKqPLtuqw1q
                                    aamTqB0y4m7k9gexkwk1oAbF8Q8Im50QT0vpkxBcb0CPZqvhRExBwGE8959nb3gHaZR4Jj0vg7tCG7Vn7F1VMCTSqqQnWZs3v3dsyYMcM777zzfEpaHbvi0KEtatB+ZOG7qMsJfcr0syqJ5V3z6UOVu0OHDgdEiWFaFBHqPFhyTEc9U9aVhk1cK1PdcqQeC3CD3HYmtH
                                    2P3NQ6WWfZgw466ALYPWMBnpmqggN4dcqWLXsV3n1b10tmRLAypqeMSUI84/DZJiCs/DllLvwcrovnPOt5bZ4eBVJX0tqeS15ivNXVcFTCbgJQm8KG/RQE3DC3Nqwwqp1Mo1y9evVY0QaibOhsL7lPliZwJADBM5029d2LHtvp6xRBcWB6t956q7+nRAyGba655poQsA
                                    Q6GS/PQYCZRnq2GinNS8zDdteVFtVzmwxGTKXQzmW+/QMPPODv7/nzaVGEaJPCFchOSlsGiHUpgLs61Q1K5wM3FDIH6nc/SEFWvyWMq0z12psdyQOgLAqV9xpIyhp6PkilQ/D3ElFqLkHsMI4dm3Hg71VzKmVFcm2H5HoK+7BBhmzZPODsCADHbVc7dsNzkhcM8YfSsU
                                    yZMudVr169PwBbcx8BG4P6/jxeX+PnQlHrcp1R4rrYIYDdzngwPdZmJGeaK+G0g4lVRwkQqQYKpSP3nnOf2Dc7VdLDfffd5zP+ykiDTqwwkyUUcHptYC6bFUqs+t9BE0KESbr2K+N60nYhPpK5yPA1nxL9008/9Tg87oACrXRZDCfI2aRwO4lOQg6rN2zY0CPKYcVj/f
                                    r1I8C5vuH4RZVmOMdmgPZXgFerUuIxNDt3dm+vVNIYXDmfJhcUK1asDgilQE6IGgxoAn6sgYeWnhspu2TJkjchFaZIyCQJnBESNqHHUkRSipWu/Mz28uXL31K5cuWP2PMpt04nDXUArM/NmzePjqdCTulftmvLKmBJ/OxPXbdu3e8OOeSQd7CO60qWLMkezjRBNuG1U8
                                    OAVqJZySdDtRNGfFJ1JTi++OIL75NPPklaM1VnDnHD84t3Stk1bCLBnk6T6MY2tqwFw766Zs2az9SrV+8taCNM5azJLipW2qpDSoEqUlv3KC5d6f8AcPdr2zYpI8o4N7RDgq8DqdyPwpZ8Bg+yOuzA8/HZ/EYCefj7Sew9TAlWmCxzlzOqVGZmZms6CqwE/KMcVA4AMl
                                    Wi7kVyUspu5XSDnDqfpBnaWNj/fR0P7B6znEx/JVsfa519IWApObAnxWG/dgJwbuV95HaPVItZtGjRswDshwLYIIX6niBpRU9nBVcdPDqaDE1garQmkLds2TJq7dq1X4Fhj8RrrMxXKiz3ktTBEuuOOY7MQJyF4ZTFM844I94QbubMmXRWsS2vZwaOJzm6ZP+yYBbdgN
                                    f9oNnqqiHyXADxPaDN+8GsPmb7INVmpOFBvLuHt7u5fiDhvnBdDCthbftt4kWSWKldu3Z84JSTe5yAD3kVxI3WZ6MHSlMrLfkGbnkiXpk6dQ7vB2OD6/3ZnS1EnfL21qNKpSzWdjAeUHouHGXbYG+9KGMj/T2omwmqpw5qdmboeiZ0wn3cBElUvVatWr1BgLeSie4LYG
                                    nDgql0BmB7GsBm7cFBlrBGAnHlypXvw/6/nx07ZL2FYFs3r1KlyrP169f/vk6dOt2hup9M772qoo667DuqfjyWSzWfdu2zzz4bEgvtyVtuucWnv4HPTUNGFrhy3rDFDRjaixUrVnwLtBQv+FenKfaLMezuAG9LSmOruntOPbhThhiq71wXGcgBI2nB2bWczM5u9XfjYX
                                    fVAFUQcN6hpUuXPjRKokXkGvt/YugnyaGWg5rSGCTmRjyoI3JaqcS9Yb4uezqJWpzl2rJOskSCSuxFd1KkOszvboVEO7tChQrPspg9wvbOEWBxbJo/f/7jkLIDXZXYrC9VaqKmJ4bMCNLqWTCRi/CMG9uEGzJsDhQDaC/DdR4Ag3jbeJNjjlMtpsDVGbc8D4H7xhtvhO
                                    rvlClTvO+++y4M7cB88g09JUxzoO0KsD4P7e5WM5Y0UuOimiz7nSYhNfVwB2ZmcqCeZJW4TOaYOnWq36BBg+CAkLQ1atTwRJu1DhfPOEuspEiDGvI81MsZOSEuSXPbL25ciwLwACuAKPPlJPFDJhaAPhd+IgwvyS6M8AzHbNK9JUSjDm/HvhSE7foIXp+wV9W+jBQRZr
                                    tkxowZ92KN30gpYCxFkkfCzB63ckjBBmDVwc9V1HGYwPF2+SLyQaI9iP+VlBtL881hEyCsJkNpS9uWEvall17irNtQHXXVYmPLEmzbwShalipV6jadEZzqObGVLNR4pmEVdm1t251DHFwJUQkeEyZMOHAcUcwXBeF4hivGOZCdoi7EmI5NXjVr1qybQcxbckJkf3bBQG
                                    4Oxivx8KvlVMpqVQzDXeItjrJlEySWnesaEXsNx4lADW50yCGHfAnifwAgydiX+mSuDczz10mTJrVbtWrVcGdodAhQp7rIhp+iPNlcI1vFnoo1ZaYyafgxXPczmXiQz6rHDkDsgLaQtqjKUrIyxMPfBbS+Y44pc6N0pHTvDLCm72k9HIcKDaEjtKHJEt6yISHXTk4wAV
                                    WTgFlx4ICWGUL16tWzHC8uIrQboJlTGuOmQEUet2DBggdzUnq3v7Skwf0txHozwe0L5aScTTo8/ArNgipnQUfCurFOGzaJg8Cm3ElGUjoY5L2wz77Gvh+lTsDc2vsELKTKgMmTJ7cHgBabYdFRRfQJ6ZPqHDNzgjXBIwZggJ+UbJNqQoSoy+vx7F/Be4aGWcxoU+vxja
                                    u70iM7TGyhOQZVNyyfs50vbL67hGW243MnYU0NUj0v0ZYWwR69SpyExZw1JKzHmHA2cSh0vNKu/T3dT/5S0PJo1qyZStqk/FM729XUexZcsWJFTxB0jwOhT5QAcCJ+LJ9TyU8GBSnbD2DfZibtRdqDJiEhsMQgxByO/ASxNqxTp86XmZmZj2ENxfelsbtIlZ2MwU6bNu
                                    1x9p42rV/dmHGWkbjZKaSslTrbwM+YHXZkKskv9v1/sJdzjURLs8PYDAYThojpa8OGDV6VKlXojXczwZLSaIsVK3aZJP1EMi4Ij29hi14AWvyBbXHd9EV3+/QeXP8L75c2Nmt0DxjQnnzyyUFEP6SEwmh172sKHqUGuNvj4Phj9sdRII4ttn3nzp0FQZAH51TKgqjGrV
                                    y5cqhO3PMS83NjEWpxgsSQmOU2ka4da9SoMQjS9Zh98Q4bqbIEUqX93Llz31MJFyFhbU1sfMyHKVBIqt0VZpAGxnJFqjY7UngwFM+8FwHiqKBpzmDx+MA2yxh4XoKVOcZ0/tgMPAGSb8AFksxXx90r8ZNkwyR4FprG9WACrGEu6niek5xULgMxPgYtJaWt7R8woK1fv7
                                    7XoEGDMNDsbJJNbbOOlpikqzGn7xZs3LT9FbjiHZwCiVkCksTPqQMNgP1aQjxeCukaVZWjqiCBtK1UqVLNIF2/hu36COzEovs6NkXs1xETJ05sC6kyQnsne3uuJnKTPOI1vNa5KHYdS/8OB1O5MJWUpad79uzZTzC1TcamJIR3XHNIPc8aldDQD52e6lQy6qgfMbqzAD
                                    3hVpAI45o3Z86cNjNmzOhCk86tPHMdTO7zttVe+hmeh7b2hx9+GDrJDgjQ0iFw9tlne1LY7DbJTigdsyl5bAsKDrUInPPa9evX75cSlw+N6hyIpHJO4rKSX/zb8uXLh0hBgDvHNmVPYpmcvgXStBQk69PVq1f/AsRw1L4OmxYJmA2gvjNp0qS7ANylJo84y0vujBFZu0
                                    uHlC0DdDzG4Yxa2LKXUrRFpXUSYGBi7+IZT5PEiiQV1I1/OlMR4lKOIOY1JHPKlYwJiRXa39lI+m8nTJhwLsyywXTHaDdJI2A8h25dAaTZVm6YMl7g0L59e79t27Y+NIr9G7Q8LrvsskDL1py5MHEnlJG08dgkY5csJAdw2+DBfpLbAoG/QDXehLdSkHQH5UQ15trXrF
                                    kzEve0wSllc21XK2VDxwkJBlL18rp16w6GlL0ZxJl/XxkZ95H7SnUYUuVFzsUV+zWqXndnhHSNlwEasyYWQczZnLKAZ39plJTVetz58+e/JuGUvXZwdDUQC1wmUegkxgib00/RPJ3huuHTp09vC4a6Amsq4lxLr+fa6vHCDMmOSio7ZYEJnxHXxc9QE+jevTv9PP7zzz
                                    /v7w+TFFKClipy8+bNQw+fuNfjEtYWSOs0ddu/lxKXmSi//fbb3Xi49Cqv/zPK8vaF8LHp82nP5rS0DRx3I+wlDqHO70VUvxhurtKVwNjM3OfatWt/APv1LVyrxu+RriQimBzfQLpeCyk7THon+150htNOby/F9l50obvGVLeULVu2HYi1Yoriie0LFizoArrYxOeciu
                                    lpmNBVVW3ShA3/WHNC7WADbhLPNtDUKvnbDqjm9wG4680MpCDF8wlMrndCJw6jqsfjysx31l7f2u2C+8AuHHfddRf7S/nsT/V3VgLtEUm33nprnChtvx0TynBtO1szys+lL1q06L+wvS5Zt27d5/vDcGk8qLUAUJWcSDzeM1TAX6FOzzNT46NULa0W2YxzF6lateqjtW
                                    rVGlSiRIkzfk8GGL8HwlkAAr1nypQp7Oy4mo4wIUJXwu6MAqxxOmVFqPJ2JlA4VoT5xlDh/xWVjcW/wUx4GwQ8AmsrYtXcCCnneU4xv5zTbV0Ut2FF+kVOZuRnofE8K3bxQuzFPMdcSfC3GPU/ZoRNPP9Al5FqbpHW3EqxTPg/Mnp6la+66irvtNNO84cMGbL/gRYLC1
                                    +sPWXDLrs5DAeJhA2MqmVT+EJiIZHB9poFdfnfkLqd8PdVf5fUZbngpk2blrAyJKeqMQsDUhG7fp+qMN62ZGZmngPp2gsq8e3qaPo90nX16tUDmCyxZMmSr5n4LjZb9t7sVi+x4Xnc4WS9xXb6nkobSrCDDjro3qiG59K9ceK8efPeoP2YQg1OUIfd8kp3vIhkcFkA+1
                                    5ikbv16BYC4/8eNHQTpPxEh3YjQ26eKcywdrsx9+yIGzvIzLdta1QroN3N3wleApZdNVq3bu3/9NNPf61fZm+Eq82vpPIioRrFS+waEHZqpHTlzxzKLN0bw+HM/BtVZkifQ6tXr35b8eLFz/ojJgHkBgh42POXLVs2BOBqs7eukPJw1wE0N4JYl8nDc9vGcBD1BqjC9U
                                    Ds7XBvF2rO874eIl0XL1y48BWA9RuGckTK23m5OSlQyHZCUAnVN55TRE7Gg/WfUKlSpQHYm6S2sfj+ZtjSN0gPrMLOGM5sL7lRXZbpzKEJHLoOT/N/I+KxLm0ldKYgDZGpQG3VkFVaBMOIA1bb+JicArcHVxzM1jehn5N+054IKU0yCoWY1OGGjrSLLrrIu/feewNGXf
                                    5WScuDiRY33XRTGEfD4gLjQree5JjJX1WnR5Kaxvxa2Ga/TZ48uQM45gP43uK/ysMssTc6LarnJNQirVRn4r6XiYRL8AyTeAhkEHmHmjVrfly6dOkLf48qrNJ17dq1n0EFuxlmxRcMcxjAqsTco2Q1o0NsOC7bSp8ICRhyhjJlynTCM04CLNcFsL4H234U1WJHska1eo
                                    2D0fp6rN3qZoh5EV0onCQNX8pEi4D5bhaG4EXYsUlhOJs7b0NKTkO4hCJ5TcXkQSmsdcG6binO9+lhJj199NFH3vHHH+/feeedPsfq/K2Slgf7KdEAZ/8c4Y7uxqeZnkH6M6nXvjLkla4cE7ZTzcqVK7ctW7bsZbmdXL4vTijcxyAA97BSpUpV3Ft5IAl1xYoVfSFdul
                                    LFt9UxTN0rUqRILQD2Hnb3T1VtkhvpinXNgXR9DQ/8O1e6etFF66kanWc7UjnliEx9VmxUAO3jmgoVKrwFIvSt6aDjTSZMmNA6e1d/1HQBZtwkciqHsrzEXlgJaqtKLquau/nAzkhV24cqzazbNyquy0DsAG62tqDLd4fQodrRGSZjKi5dTWVbQnjT+d2zPb1knwIJD4
                                    ZFN88++2zQqlWrvw+0PFSH5wO1arIBr+0blC6/pxsAZxjwhu8MW0h3xFMA3nYgmEZ/Vr4nCWjx4sU9CxUqdDlAmy8nQJo7d+4j+M532pmCNjFeG7HeFuXLl7+LifS/x7kmDpEYpNiHCxYs+IBSHb+7qmdsb2qwhnI8J+HFCUklSBlvd9NzFqrnB6ENAxNNas6Oj24F47
                                    oRUvYnhlYc7Sqy66RZT7aXXJYYuKGfCFrynYyqOG05kxs9Y/O6o0z0vrPYrA/31gi//gYJuWLTpk1sSbMcdLwGr+1SvpjhDOwOUsThk8Br/QMQBoE2Q7/55pu9p556iuNz/lBaznFKzkknneQ9/PDD3oMPPsjYVSDqQWDc9TGREDHDreI2gFFR4gQpIYP05cuXfwspOA
                                    6S65KKFSvehP8V/SOHJqlqzBABHmC+nCTlM57LwVm6RyJNWMv5fwDtHalyYHO88WB+rMoBWN8kIBhSkkSFKI98TKWZabnq1u3G+ybzGXgR+c9OEoFKq83QdDqAmdV3Qzy8PzybD7G+YThnSSestUM80oFNW/QSG7ulCRDSnDBhwmA3eacNvFOYULopqFdg8Pf89BibYv
                                    ak52xVc7mWj+f1L6j+rcTxFWTtqoaZBxpevG7dup+WLl36GoC2UvffZL0J+foJ4FXJq5LZ3EvAkBGBy7175ZVX2FWSIaIAguKvl7T64K+++mq/Z8+eYdCZC5T2o77pNBDaAFK6ZjsZpKuTylGbVeqG8bcSJUocXq1atX+BO531R6nMYp9Oher5CyRkjpxQ7LI4adKk2z
                                    ixnbFJ3ii0gdvw8C/el/YvVrqyWduSJUvegjrcn3FgqcoJjErrVgztTcompZWaSqyEpA9jQ1LKMpGCo0WGQd2vYCcqiFo8HWrxFaDxbAE4veRsVF8K919RnucOEPxUdtwQjcSNIiQkoBgCp6ocjh/BuTJwzoPBUBtC0p8C5pFJjUPoifHZjaxjBpP7GSCbiGttECZXwK
                                    q3UeqxJPwUgOp/48EHH/yIC3S5z6nz58+/HRrPT7SZ1aww5kXMqMg2vu3G6uM8UjqnBEzGYASmV69efxhwcx0k5oClFi1a+PQqs4iZ2SxCwKHb3GkOHdWxT4Gb5qjL6UJIfIjc5LMh1W5mTPX3Sl1uIB72yPXr12cfdNBBJ+xt3Id8fsyUKVM6ervm8BYGYO/Bpp+8L3
                                    NqTXybIaQfIF3fgWYxUdSyNCdUkVTilwPAuvNq3WQCz5GCasJswn29XLp06Zv5LJ092Dpz5sybIGlH8pnhnvGx0ieAqZ7CTpcAVhWxb2Mg+rH43Ot4fWPCUrGINYkSE9tKlRznqYtznodrN8XPh+EalTSDLlUDP04jBA3+AoD1wTtbBe10EiySJv6JFN8EE+ATSN3zop
                                    43zjN34sSJraS0McNLzPoLbPdMq+5H+A0C6x2nl5khU5iWHBoW74f1l4KWB+w878ILL/R/+eWXeOGyUymRNDLClboGtK6zKl0cXUxar4iNfgBgOXNvLVVzANpPwfVqQxU8dG9OKH5+zZo130+dOvUBDrmqUqXKQ5D8R+S2o7/jaMK2Le4GCTtIAvz5veQcZuXo2TlwQl
                                    mbMds6npzQimdaq6gTJ53FD7inJgDtQEjZIm6jPajE706bNu0hqsXQLs4kA9XMLm1H5DKk2bNn/x9Uza/Y7E7XZNdDhxDBSvDjOdwGoJ6M3/NZoLqmi/vcTQZVDEz4a2gr/4EZM8X4AiITYGjuZGZmXg5p+zYZVFQ+NYtdsP6PjO1u2/Rkyfl9p8tHUhKHmoWUtNKJNB
                                    xQduaZZ3rQUn83cPepzIQjNfr37x9ccMEFIXDxzENd3jo8bG+gKNVFwBll4MekLWcBcKiVIJx/43pXYbPvoOqyr1IXXHkjmUAO+kZpbusG5uBCdXwC91d/XwArYNm+evXqz+bNm/cWVG6m4RWUv7sPO17mKMkP28XjmS2Ekm49om4ig5PkEDgpggktSCXjJwYw3sOZTF
                                    ZzEPt/3ty5c1/C/6qxjBDS9Rx+hnuAe5iM++mPPbkJ6mxZay8D2G1WrFjxrSRMpKstK/bvDny+KT7TEd89Sz3uClh8Zw2Y6gJcezq+N1e0h0pgEkfQ3iY9qLkkzkqWDp7N2PKiRYs6Abw98b+Crrfc2Jx0NOVPlRsgfytmohyBqO/bce8FsdZibHDHHHTJSkv3dnd11G
                                    sleJllH8I/Yy+DgQMHeq1atfLffvvtoGbNmn8taHmwLc2nn34asAKCLSfVOaUufVl4moml+dZVrv9XIo1wwFC9CKUuHkp3qJMT6tat+xgeYJ3cepgJAHxnrfRMypHtjutUAmA706O6j/2GQwIHMb0EQh4tNlihVGl3JpgfDg7DftYQu5Fd8JfiXJPE257hJc5XipwCYR
                                    IB3BYrYYgHgD0bkral22aWlwODYdubBlWrVu2C9/KUrvwcwPrpjBkznuR5QXQ3Rji3KjFbig47tTWZ2snWN2C8d0O6kvHmV4+7dsOEpOwNdfcrmA7Lqe4aZk/TKx/AfjjW8jKeSW0LOEl7LA5N6AUW7Uu3iiIWTE6T/TrKJFIwbn6PkYV8XDfvHer0udT0cP+ZpCFI4p
                                    eghX2p9cFaRGJoO6aOPit1pQwx4PRAJit16NAhuPbaa719sXN/d+Iz9fXbbrvNZyWEqh0aEoryKDqNrX2bTRWhLltbdwcdFLVr134RN3pUboCLz66aP39+dxDN3SCAtJyATpu178Pc1zC/edmyZT1BRB+y04XaXBH2j7WNGE7aCilUB/b8tZAg5/N74i+gKvgZmFcXKA
                                    wzxYOabWYCqfMp5thb8RioMxA8xhY3lFI2xMO1ATj9wCAXAtS3AazpUuiwE/fzGqRvd+xlDIyMIHoHe1nAVuwAgIthF7Yg45Frsh0sPlr1GdzXCSpZZRDYYjCzZ2HfvydaBfeooDiX3NTHDVjrcXj2H4MGCrk0Kz2LmbRzPuhxi9BYQvYXx5BCW+sG1fzSKPVYWsxcA+
                                    YxTMJETbDuF7A/VTQZRxNg8FzbU3PCz4WcUFuwK4U6xsgIgRrj5ynIrHOKqjJfnE7PwduXXnqph+fxx2VE7e3gQ3/rrbeCrl27BgLYMFZlVWJNITOhCNeh4paVua+wDI1jSKZPn349HnavnJb8SfnXJhAU3fBpOZW0Okk+txlNIPpRHNYMAn+TD810unCHRscftkpXSK
                                    MbDznkkD5gSmyrUlClID3xILZWDRo0GAAwHSVEbpNZ3Gbe8aFY3u65Nsogt4IgzyCIXIcaGSM+1hjMrT2rCEXDWA8CvR/26pv4bNg/GX+vi/UViAi5bJBnzlAe0yKPqlGjRl9eS21haQszCAA7A8TPTLIWAGP3evXq9WTkQBoGKFMPIw60q7GvExmCS6XacnYT9uYMCR
                                    u5TJ9HKfaXisp7F9AvxjVmEYSwOU8HYN+ls81mz2nuNGi+qca5RU1ON36aeMsd0ptKY+36SG2UBxkHm8fde++9/jHHHBPW7HJo9l8CWj3at2/PzuwBuQezQqjDGxUlcBwkSeGMqNRHA9owNMAbpwMFKtqDjG/Kd3KyPE4Q8HOr4ubG0cTWpVjTU5A0t0MqzjE1ninzgk
                                    kgDGdAbWJz8lfLly/fkXOJ3EIDk2ifCRC8gP+XFEaYMPbCTT5Q4jHdH8n5i2dmZj6gXnB7gCkWwN+qkRETZCCwBdjrOxYvXsxmdsUljTA/1OpmUUyTaame5BxTlYXa+jbOVUnrcqUI4m2WGOJvterUqdMX9/Mha44B7GrssmiZkee0PqXXWUfMpBAg9fSRWGcntwrXLo
                                    3zR1Z3SbbcdyzbBMO6GOt+laNco5i2+DvWCWPKMDn28YboZm5QUiqmxqWl+CDUTplx+M4773gnnnhiCN69dYL8Q8ttmIAxZMiQUFeXznqhB83JUw5ShThMRUpWKgBT7ZB+VOye31kycPYIPqZMZnAWyR9cXSRSMIvVOGz9AtByhmOGhAyiZuXYFMOdktjQEoD9GCrnSW
                                    o77kkDoESBRKone5VA3BG5vBa8fLHlTSsQd2NXykpn/tDZxH0CgKdCq7kF6uI4nLKoSOKtWOfRAO0p7jr5HUjCqZBYO+gwhCraBfdTzgJ21apVr8yaNevpihUrdoJ07U/w8/+wEXuPHz/+IuzjFGmdk+begzjwSu3FNCkiYEoIM5JZsXE515Wiv3UMa/tavMtdsAcF9h
                                    IWpKOsgDIHzT2QopgoppOQNShNEsL70hxmXo97SjOTKcPMhfhLQBuKgsxMco3g3Xff9aCuhDYvCw1cD7KN4+lQZc/pHqjAddVn8bIWgAR4G2rok/K3lGsCAXLaW8E/ErTS3WA2iPCuadOmPQouvdpUv8QHRTvT81QdZrJGFgjk1sqVK7/CdjQ58U7rqBOob3UciZIe5S
                                    vwEodhZeEa5cEkOkVJWe3TxHc8s4kspQQIF+L3ovrsyIwA+otxnjQ3bEZmjM+H4+YA7OOVMei5IU36sAkcJGsPSNab8P00/H/DkiVLOmH/7uFAL9u6xjZzp+cZ52xCddU63CJ8F9u8xBGc2tKVnRzPiCqVlJrpgVhPNTCTp2nH72lyIvdx3bp1vwloM2yegabwek4Rgv
                                    5swKsDwOLtZCl5CWB2i+FUQSYxPfzww+zq8cd5j/d2XHPNNcEJJ5wQjjTs379/CFwpO3Pd7HFuZ8ePeBHlU07YiGpJwaVLl75DENSsWfNJ28/WOeimL/pHFeBL1Us/MIzXwBDWqVfYpBbGHUJuLyauFcRTrFq1as/AtjwtJ9lVwmy2weYaiO8vBjgYFikkgExIqzNhDh
                                    sKCqUsAHsjnkPKcZ5cC6Tet5wUj/vabAZrhU3VWdSPNZ8aUbZHxrgEwKRZkB+fS7gvrHs4CPFL2Ikfgiir8Po433yo3vfg76PZnzgiROjZkA1s3xvZsmpPiS1gNrR58wlY9EPMiCoDE+TUqIFsDDUBLDsgYB5WO34P3TiYTDSHarTsf8xNn3TW7ZvPJGibcvi2wQT/J1
                                    mGAbP2HnvsMZqafpcuXYK/BLQ8WO3Qt2/f4O233/YfeOCBkINAhw9khKGtYbRJ4oHNOXXAm5S8TXWK+bF4IBy6dEcqYSuS7g8BLK7XHRK2u3DMgl5ilY3NF06oYyVgQRRFGKIA5z9pb9lVmvLI+1uxYgVDItMZEiHDkutmCWdPiN860yB4XU7AqwUw3cbrRamIMtF+EF
                                    TiB+k3MKmVYd41/l8SoL8has2SvPIZGPJ6hndwj2UNIW6AqfQTQPcoCDEELJ7/ZDCGuyHhZrNTq3m+vnlX4t8M6d4C3z06VWdIGQOyDEzjJ5m/m2YAksXwGb5bMYrZAIS8t9NBlwUVsOK8TNJG1EOO9W81402jGtFla6qmCcHFs9SkNjeqA4oimlI37NH23HPPcSgebd
                                    3gT1OPo44bbrghGDlyZHD++efTcxiWMamta6a0uaGQeE6tln2lcFZli6r8IqRuzygVmJqbG7P7HRK2NwjubbFd07w9jI60day0B2G3FKtevfpbBKzaMKlGW+C1HUT4EdTU6yDRXwWB/yZpokWlzUqUxzLNtXNFPYvBbGkPoi0RJUmkK8UI3FcnTj4Qj7dNUGBc93wQUV
                                    13zQIY5lKH9b9kEJJ8H/4fQN4IQFwJ4FTlPYMYp0MdvgP3M0/7E9uaWwewBFQxMIt/c1zKniYLYK9+BG2xO2U+45wL8QJmdR5dGlGziLCeTDC0wrov0sh+NM6VlSIUuFQ9x8amzXA91hJP1/+nGU9zwpR6u1bjafZ0Sj337P777w8nHvyloOXBDJB+/foFHBjMNC7q6m
                                    rrCndJSK6wHRqcMrBUNq4/f/78J1avXj0yArg7TMB9nwHLgU6QsN1wqXwp+h9HTqETwBaFSvwmJQYfRKqBX+oEglbyER5auQoVKjxx2GGHfY7XR5UqVbqSD55JFhFxbReo2pFiB8DWAIzimii7mdfDsxgHCXs3rrvFpFeqdrAVoDsEoL0hyhbm97HWnpKzS9XUh/r+g+
                                    knTO9xWIyAcy3D/t0nnUCKeMmjLG3JZyhlYWfew+vvicHhWuvBNHqJnWkdcDTJqBqfFdVYjzSomV7iYebEhNdmz57dVcZ3RvlHpkoChnZjIbiyWeLHF1VtvLLw4nP35WWdU+mOvyHNliSatjeeTvODBkTgxk2/DO8vPih1TznlFO++++7zOQmcMV2t0bV1iWaDY076Xm
                                    T/WgKJdte8efM64SH1Bvcs4zYc29dEEuGwiyHxXmAhuGRq2TrWhEnvhsmEzdJwfwWgEr+MdTVNBVjNogIA/gtOvxQguQX3UNQE9qtwUBekznlYx4MAxkxJzk8zAA4iWt1mlCtX7l7ag1HqIYiLtuXdUPvWCpCspsY4M0vb2mHdSVJa9oVTBHsKIfNv+aHGT+H5WA2k6+
                                    dQLDY3BwH+Jk3hbFM52+ZUU//oWT8PqvHl6tFOZULAfPgIezZdJLfNSqID6xTcd3n33tW3omEdApa54djb93G9MkxZBD0Vs8yCsWesf1Zs10FnIkFfCMy4OtZKJ9lOfHcr/sYOnssWLVq0CvsTVolhP7YwBk1akKZxgUnI8Ew7nATapnOKJuWAAQO84cOHe/QT/eWgVa
                                    nbu3fv4L///S9rdCkhE2p0zST6uMqgxr7b/c/+Tk6/bdu2Gdj4jnXq1HlLA9pUKbFhs/Z1vSQMPNB3oTItVltStQDTSzghad/8TC9xV0i7k/cEWPZgwj48Bdt1DIjgv3j4RR2C8cQz27B+/fpvTZkypQ0IdYGo6NoOJ90BHUM0TQH+VlFqMdMNsVcPQFXl9MBiTi5zWG
                                    sL5nERHVBRw8F46QULFvwHe76GTivDMTaxiyQIv5RmQAFYvSHFvqTNSeaqjMZpMO5JPHYLCLXWQQcd9Ei+XUdKrYRpkFhDD26NldxS610AjO4aTeyweylJEvGwHfb+BaZBMtxLTYZ2fYQTiiNH1tetW7fZ4YcffuwhhxzSsFatWuXwexn6KpjaK9fJAq0w3X0LveLcD2
                                    hpiz7//PMPX3755c8pee0kSnn+2u8q5gwHC8S7zCohH6AN/hbQ6tGmTRvWGgadOnXy33vvvbCMSRrIedYrZySuZ3KbPcfxEv5I9Q4bNBAP4HkQfwdNFmeVx75IWok/jjbT8qKK092OEcpFN+JBPsSGbyotouxJPJAlsFnuZ1N0fPZczfeNWi8fICVH6dKlTwRR9MBnCm
                                    ihuZfYw5jryg/Cv1/jv/Z8/B3E/hxsdJoTJWzKn1xnM0vn8P27o74v9v37AOJQcf7EjMTgWgjOuAeZXmcQeX6OjAFzppRaBYk8j/avNWoJWICpfNWqVV/c24hN+ioAtqchzbaZ8jwFbRYTPHCuhq4DS/YwPhaT5wC9fCH+Al9Au81+hzQJBpbZqlWrNw899NCDYa74HB
                                    3C5Ij333/fY4jzyiuv9Bo1akRvOSMb1DKYhRWq33heh3Xo0OEsnKf9Sy+9xDBfSdnrmKnEihnVODCjVMLCeg7d5ljQvxW0PMidunfvHrRs2TIMDzEbxJW6RsLGjOMiCoEqWTNg43TDhtbE+c/H72XxYPcJtJSUkBJ9qNqYmbTZXnSxt52kvgEEfwMe1i18aKmGWIFoJ0
                                    E9fQDEvIjlZZwAv5ek9vhsG+PIsKDVh890xVOwBye7UlZik19BfftACNU9/05mZsGGvp8T/aK+z2IISOlu3q7qGbtQNvArjVclPS8k8SzcVyVOLeBIS32esG1HT5069Q78f7OEpbbg2VeGKfEi3g/dU6GGSPkXV69ePQk/F3PogXvBhgrn4Bz5ohiOrG0TbOzH2KFTbW
                                    xKWO4d3tc4tqx3xBFHFG3btm1R/szBYVD3vcGDB4cJETw//0b7U/PW1a7n73xR08rMzLwfezAZ6jPH5uSTewmc+HSg4UupSguF2Zw5c7xff/317wetHmxBecwxxwTsZgfVOQwNMeDsVg2Z9pUJXQVtjJb2LSUNbpLpeungtoXoFc1tWZ8UrXODfzYu/qTsJufFB7YRBH
                                    M8bMGHmEQQJS0UsNOmTesA4l1NmxD3fDDV0ZwkgTBtUnwSFrRx3DH0AjvrXjdEI9x7E0vvJDc63QlbhKM4K1So0AEga+Km8onjZw329lEQ4kZTuaRf3gHA1WbTdl6XiRpQ5a9nmSPujUUDNWX9swC44diDrQLYjcWKFWsEwD7N7KU9DdamncjOH3Q+4RolohIg2AmD3U
                                    9SqfWU0gDdg2DIo6haS68oD6bMIU2aNDkGEq0OGJtO1/A0yX/mzJlh6JLnmDx5skcNkT+DOYef4/+VzghUNo0go8KzUIldDpL6kaFDh54njikrgGxr2yT/DqX9qFGj/P0GtDxYp8vq/qZNm/r33ntvfLKB1FH6UsniS8odS8zikte01FSORe/eFmzinXyw+Hz1fVGN8f
                                    BGS9yyQAqQuu06t7OFC46n2PEiKh1OPMTTWCsMwK6VFL380AruAnDL7a2zBtU3rGuhOH/SXHuWaZuQss1wnsbuucS+/BjENIP5xBHn3gACu7BUqVJXubagzsMF4OlQGs88ZnP/cUzhHppoPBjA/A7AXEMVluq8AXjY80lDepBAF2PPKNlL7CmVk3ntANXmo446asv333
                                    9/JMyKqax3dUC7FYC9KqopvZgjqwhYlkzuqlXPyK5Tp05jnPd02IynQ8UtSCfpZ599prZsmJbLWboEIc9JcIJW4wPEcL0sAIrqPgv9Q2cT/pcftm1lPIv0008/PcwQ5Fqwr0X5vKW7haY3BkZr8s30BS3EoekXcMLBfgVaPVhryGn0TOUKdfiMjEDGGKqk0BARQxrZTk
                                    fEBIkbuvlgN3HgllSQ5Li5E+06EOdQkWhJY1BStBrJLl++/COQFvWjwCeSijbsPZSw4sDZCYK9DQ/+WJ0xtKesHOzFJko5CTuoQy6eiEKHHDOIXDtavrsUavFb+LWw6XjoiS3HGURNoCE8GJWqyHPhu4yHDxDHVbaVFHJt5tGW1PExdAxKpU66iVZoczg6nKqAWf0Lms
                                    llmqaZ4lmEgGW/pTZt2pTAZ+88++yzdzz88MOdx44dO4AMUp8J1obTlTjTZToC2EVglg/guY6hlxhSrxmExPknnnhiM9jcobnG73FCvTOZPvw+7t2bOHEii2PCFF1Oscd5sqZPn96e4UahDWoOWaCBIrfddttn2NNyPDcLAyRBYx17jxG4pnGd7xR7xAvo1fzg9Wk+7p
                                    eg5dGiRQvviy++CK655hqftgNjutIwOkzEkALomJQ/aRGyOmASejMTqPjuSk6dw98q51TK4qHNxGu+BMWzvegeRDamuaVkyZKn4UFe6BKMOe8OqJZPMrmAkopxUIDkCnDhK/Q7VKv2NFIE97KQwJVUTpsuySKEbQBNbYDhRFfF5LlZ1igzgYoZH4Av8djK0Ha6gNiKpW
                                    hY/s78+fPflKZrMaepgeI2S5+BHBudNE56GbfhebLn1MVQHdsyJ1pBkQqwBAilFeghdMaQiUM657/99tvvveOOO2ZgP2exAokeb+z/2WSalgFIDe9sSKq7IC2nAaynHn/88Vcce+yxx1NAQC0Or0G7ke+qKdjp8GBYHiUwEx34fzy3UMri2l9gX8nctaMFI4M7oa2UhK
                                    lQgp8DY6Bqq8Oz80tedDw+a3w1Sam48v9AtKT9F7Q8YON633zzTXDuuef64GQhcCU3M2YayMVsKMh6kk3SOSXSCnx3AUGb0zpcqDYLHdU4cFViKQoIywYpffCAHuADjrJj+aBhh71OxwelAYFCkINwO6iXEWtk25UC4PRFUq0LjITZUVvFGeVJDWkWJRZNAfyP9mR+15
                                    YFoa/G9RnWKGxtYGkwUKpy5cpdCVzXjiVgQZh9Zs2a9Qy91RJKC1LMyckCYc7U5eJcNfG3r71dVVrs3lAD99YcKjirjerr+VMdGkkgYKF5cR3h36REjoXkBVq1anXDu+++21F7b0GynWM93uI/mDpu3LhbKRXx+QcB2Cvr16/vA7yh+kt1VyUr835ph/Jdh4JJlRKfT1
                                    C0aNFwGLbc7wZIv3e9XZ1JtAVNqOaCIVxK2iFDkLJEMk2ufx0Zm4wqtfOLPCeEGWdaxseyf4OWR/Xq1b3PP/88BC45nJG4cX1fExlUwgpgs223DIIPD3k83o/bW2M3kzEz1SYquFlVknxQiLm2ANo0ECIdLvVTpQqC4H7EA35f4sZbQLxNAZSHTKL6No7fAHCu9pwhVw
                                    5op0i2TDiDBwSRDsJ4ENK6NQFH4lOTwYIW1x+Cda6Uliwa2mEpXcEqVao8x8wpxi5dRgPJ1mfq1KkPY+/Sne6RUa90SLLvQJj3MlQB4r+WJgr9Dzj/YSySwP5nWqJMJV0JTjp4YL+Gjkrelww6j0+O58+wQ0/o379/XbZXBRM8DtdpaiuMcN+joRLfCYA2BPjbN2jQoB
                                    bByoo0Doum5OZ5pEmhx7wBSlWGdGjDMgdYGRknMOi+Svz+dZmqqD2rua6deBYVIMEv5DkoyelVpuOK9wDwf2c0w6QUTmcMZ/L0Qu8AOBS4zZs3Z7+oMItK3ekRw4RjRsJqQneYI4wNm8Dv7ckzafNemdDuJfbVtfabJ17We/CAzgUHvQ8P91ptqeJmDnG2KtT8MKOKAg
                                    SAPRJAeZJJFGp74mEOgiQcDOnRZg/EHAORcV35pE64BPbnfoDhdJ4HRD0Xr8qQBO7s2B1YYz9+Twu0BfAF2QsL0ukY154W6fAhmOVTuxLBwkx3t2l3QoM6Shswx5lYYy/sx+XY6+pVq1Z9PKfdNPX6uPY2xnVr166dxgw6gokSUfpsh2CjY4e/g/FlAIgnDR06dAzuo4
                                    XpukF1chCk0xvnnXdeO5GuTMAPJRaAHE+y4PlpL86dO5dSd+OCBQu+AwNdBWDfwP+7kQcyBaZv4nMfaZza2927esepp55KBl6CtizVY8764fkZ/oIK/jm/46ToJWT7WdVc944vMoEDArQKXLafPOecc3xuuJT5JTS/Nv1ybU6rhmf40BeB+AJvD9PLDWg3gfjXOkkLtg
                                    xrGwjkSICF0q0w1vc6CDU9lZTFw32dIz/5vAHYxgxtUEJrSAJq10o81O6UfJTCOEeZqA764oTiurZDItcAwT7IUImo1uMAsvk4f3XXAQViWcQ6UEkQCWtUmU7IbpO4h+Y2W0szdKDGvw4C49R5HbMZOOM3olqJhrwFzJVVPZUhKY/LST8vtWl5b3i+3zZr1qwmmFejww
                                    8/PJRyLDRRwNLuHDFihNe6detwvZSER+D46aefjgJRN1dNCuf5HoAZDin9TMOGDWvUrVs3JHo8i/B8UiIYtgSeMWOGB21iOQDbD8+BFVULhPmXwB5fYsMv1OLAAHvAXHgN36dfIVsyn8LSSwD1iMaNG19FpnL00Ud7Y8eOXTt48GBmh2VPnDjxQdAVq6EKiu2flJqrNK
                                    bSVrPK+Du1gwMGtDxgI4TABdfU+G28batxjysx+RpO0N7L2KyZAO5vzPTJAWhp4GxJ/nMIWCYQFIMN+RwBS65L935UbaxUjQwFYfTn76VKlToDquwDDG2oNOBnIGFfgy24hLW2MrYi0ovMKhoCF8A8FhLsEZyjnDiwNrPzI4B8S1RJGat4pIKHHfRppxcBo+nC7hFWwg
                                    pRbsW5HgFxs7thYbVhvcRWobFUdr4UNawHEFqDKdxdvnz5G6XONdLhR4bLAWSQXP1x3W/OOOOM82vWrHlRnTp1qF6HKqqqxLQr2Sgf5wxVZd1D7EVFmCcnsWKHn8NzHtikSRMPEviRRo0apbFxGu1J2q68JqUnvblMVoAmsXL69Om9oAl9JvOUCmjTNuzBE2B4P4HJts
                                    VlymEPf2PzBZzrZ2mwR0aSAVqoQC2IuYtYS/Hx48f3AJMo8swzz0zENVvjM6WmTJnSCczse8m9zjK5x4GhraTcepm3FIKW9vEBBVoebPj86quvsotdmIAhnR/jxOTtbtdq1WT+nMaBS+Cgg2D31E1VZWMIPcOMuLQ5raGXFtz3CabJqa1DnLl2pJxnBx7U2/g/VelrQI
                                    R3apaOqqAbNmwYDkL4kvYxOTWbjOG9umvzSYyvOFQ8TvKrz+Zq6nCBdHgG97YFhHuk29uZAAOBjpJ0Tk5wKETAMpZrK380JAIiuxcSe4zJlgpsVpoptnfBa02U8FqQiozpfop7vxz7dRyz07ivTBPE/+dxkgNeo5hHDaAtO+644y6BGns7VUoAJVRj1RFEx9N77703FN
                                    KG5XT11EnEdzDDg3DOcazSwfcq4zwVAJ7GOFfYppQRCAU5vfPjxo3zAKxNsDN7A7C9yTAFrIU1dKf9uaEmf4P9GEYthUkgXDvTJmW0ydYLLrigIwT9FcypB6OgWrG6X79+73fo0KEzQNYWNnnRCRMm3I419Jbzx8FqxpdETvwzzyb8GLWFAw60PK6//voA9ojftWvXOH
                                    BttwYD2JhRkUOjBHbqSHDp23PQy7ioeFkDR9JuAwHeyrCOrT5hmiRT/yJCLB+BKKcBJJ1BPBfYGbbq0ZVSsDRhJNuoEeDfx6dYVz6qw9buxDX+y0ob0PKt0sbFbT6+TuzzGPN5QdRPQU1srIBV1RTAGQzp2BkEvNROyKNHWBp3Z0mogppGAZOpltCkwGg/YQUSGMYk7A
                                    HTDUsynkoPL9ZEdZL9qMP2qbwGCPKUFi1aPMIYKR1F6s1V1RB24QSA4TEw7GdMI3b1+PK+CwG070IT6wrJBw21cRhHpTrNz5PBcnYsJ7dDwg6EqvoW9mWmgLVIVMKM0FSGtIXdLPnt+SSZJwQ31HOqvhkAbQYlONbo//DDD/XANC6mE2zgwIEt2XifzNJL7hXmtr2Ng9
                                    g6ofQ5QdsMDkjQ8njiiSeCMWPG+CxX4sMQW9WCK2byOMNaKnJ/pg6CKBeCYCvvxcYqjAdeBYQ8S+1aJh8AGOdDCtyu+cSSWzuS8TdI8GZRdjFsnA/Yz9iNvZLoALY3QZxzBSRhAQJjw3vSAixgAYgBsK1eYQ8s/F4hSjUGQJZjjSsA9gYA7KMgrBomYT5M6aNqjVcfyd
                                    KJMyv2bWaifL169eqyh/GRRx55ys8///zljz/++F8nEylqhk4gRd35xfG1Vfp1pUmROLWZImwGB0ZY/ZJLLnkCzKTQYYcdlhDm4D317t17do8ePR6k80/inKFD0mQO8ff8J5xwwqU1atQ4nl1TmGFH548yyUmTJnnDhg1bjPW/CLX3ey5NemBlu4Ufjp0eOAwqZsCU9v
                                    nnnz8Nu/VDnL8SSyohmWvjvIfhnD1BP3N5r7RhndTXbO1V7TI9O41PbVr6Bah9YP+9Axa05Ggvv/xywM51BKzJHPGdTfB34SMcwcneyYuxkT+BgCvvSUXmhoF7N8aPg8RTS8CeC+J6HID1TZ3r9rlz5z4KYrsOPyeAFoAtAOl6O7smRNm6UIt/hOrc11QPhfWvW7Zs+Q
                                    nMZS3toFT3L2r1YKh2T9OzayRgVDLGdBBwG6y/HaWRBSzUz2GQRF1Zn0uJo/arjN/YAonX9KKLLnqydOnSVeh5JeE0b978ONzb5hEjRvQR4Kbq42U972lmRGWaDTmBoZW47LLLuoDpMUwSMmGqsDz4M5jz1nfeeedxXHMViR+vpAQEEjW+Xxr265li44Y2rIKL0nXw4M
                                    HD8M5SwuUybcKtzspOlZ7q5AfHGZV4/ZfhWguhcm86/PDDy8IEajBq1KgH8RyXGQmeND9YGz+YDi125IttqRTOvGXeAujvr+tc8Wcc9CzedNNNoa1jG6RHpBbaB8POCv3B3WN7SWFkPukRLFqW4U3nQeUiYAtoyEgyVLrBZpsM4h/veklZxQGiSwKspjJCQnY2ar3W5/
                                    osLF+yZMkrarO53yXDYAfBKVOmPCRdDMMUQRAPp/ENFDUuPoALnz8TJsG/WThBDUE87/Mhhe6Disiui/OkT3O8eIBF4LDTTrniiivewD5UofSjN5TEQ+fQDTfccA8TMiQ11IuSuF50q1w7bCwMj7Rq1ep27G0DOll4DQWsNJqjHfsG1Ospql4qw8HexsHL+8R3y0A7qs
                                    ghziyZo/bDZ0XP8IABAwYNGTLkPjJDAsnQSFJqqvk5qpVQ0kvSLzNwrZJTp0599bvvvrueWWey3iwv9RDwbG3g79q2NtyjEhe284ETp93TcffddwdQnXzmhBrV2He736maTGkCIv0erwlly5ZttCcVlHODYKfcDKZQkOMkyOE1nEDCZxIBpOw7OGdJSk0OkOIYCWtPpp
                                    DiOwGYJ6WnUUFRz+KT7qhOAoAf4H0j1LwOoIfy+vAo8dkJkiox4wwiYdnhsQyXDbC/jZ+XQPJfQZVZ1MbCmpYHsK7lTB5c/wMSsEjXfDZxBJ/Z3KBBg5MhYbvyu1TJaGfSkSMaBFXPMvhbKaxzo5fctihBYpg2MjYcx4SXzZDex4EhXEGQ0cNLBmxDQH379h05evToj+
                                    nAkbxiPoMMmylkkmE282IypTAhRs3xI7yeqMNRUtQy9phxRMWcxJogKm5v7puZcdpjS4duR8201VZEMdvFwnZo0XGZvBc65c4555zgHwFaxq3atWsXNr9itpQ0P4sD1/UoU0+m9w8S6RMAsdGeVGTh3te4mSky2mICE8+pmpPo8b4Oqu4jUPVehwTIH1UGqF5QfO7VZc
                                    uW/SC2Y3wkpKNa5ofK1ZeqfOXKlc9nYzTYugsg2X8Ag5ijE9FJzFAFOwKkR9EZIqVyYcmeAlXS+FaydxPnC2Ht9JTmM7ZrvHUpw0mwwRtfeOGFbNpdmGETAta2vtXkEy+xlMx3w1Q2HGfm0/pi3+7EPRUGId7H32mD2udAtRiq7NqPPvroadPlIdt080+w73mPs2fPnl
                                    WnTh0y4+bMcpIpCfS45nv11Vcf7dWrV/evv/76Jzz7Nbx/ZpKlsGNT2rYRavKe3hMmx7vAVTBbR5Qt/FC7nQ45apTMDvtHgJbHlVdeGTz33HO+xvPMpvnuwCtxUBWC2vUOOwzi1TQnTh89r6imX8OWfAwccIM2QmOOKa4/AqrY9SAcVvnUtOqyDuYCxw8dPtJRMTsFYX
                                    hCqAUYN8Q5XxGJGni7J6B7UinDJIkqAG0Zu1YFD9b0KyTzYA5+BrHOZSmaCWtYzsIGZZuhWRx++eWXP087E+pxJGDl2EaNwdvdHF1DYrpnCRJJuzEoAVNjOPnkk2/A/jekuk3mq425CTbGULt3794VZsdc7Hlx3Sva5Lj/4ir1jbONr439+/d/GWuuhP2oQ0cUc4TZUA
                                    H2bq327dt3btOmzcyRI0cOBni//eWXX36THGDuiZ/iWeTEvrUtkjzHmZQAVtMQ0HU8hfEjG1lg3bjasrfeemt8L9MfeeSRAx60JCxwWX/MmDGe6V3rOzmdCZP7yOkBiBmlSpU6n/HOvaXYicTKAgDeYlofCJnF2/m8xKZk9E7PAZcfis9uCgs1s7Mp2aeDSQyYP3/+s5
                                    CU3xF4RvWKKqrPNuqar+04pT1oulKHFPZvxPV+BMhKg0AZ4N8KgE7Cdb4Ag+BM3EENGzZsAIl2c/Xq1Y+BzTVSBiTbxvChl7hcuXIHg6g5UrICbViCKQqwBBXuZXqfPn0+FM0mynuckEGmmWr+rvShLEiNgxiawbqL81pWm+Few4794quvvurGYnqb600/ARPxYbcWpg
                                    2s40wWL16cNXjw4L4A+2w8n5+Z/AJaOIQOS9q4PDdtXJbjgRkdde6557bEeerAli4EjWYxns8qGSXqR/hEUjna4vdqbWSr4YlJZseZxtxYrKjJ2isqEO0tUGcnNISAGYEHVO5xTo6rrrqKo0h8dY+7XM+ogCFHpYSE2vEzwH5L7dq1X2CpmOtIsuViUC2/hb34AezBEd
                                    6ukYwZTuqebnohNoCbOXPms2I/UV1l+xI6h/KZ5uZRNk7UFHMdAp2mHJvqPYF3/vnn316hQoW6sPu6cmo9GFANtu6EdFrGPsEtW7a8+fDDD7+oXr16Ren1xfeqTJo06Yhx48YNNeGasMUKJFMR7OFTAP7BWldKaSbzg3SEaRy0sOXnAAQcbFYolZpsHoJNhOefNrVo0Y
                                    Lpk5V4HestJsggCRe8//77T2s7FmPeZEEic4RKQTU1TJoml7ORzh8wsdVQq5+cOHHi95BSvH82YUtjkgWfMbOqcBSDRtSyadOmLcGo5vz6668jfvzxx+8ggUdAO1lPbMiU+qiRNglZTDY2HSWRLThtSNKqznIvfA9Uo6Na/Pjjj4epkAl5z/8U0LJeERLFmzBhgucMEk
                                    6yK8ws18LgzJ+DM6+oVq3arSDc07xdc1JDvwYIaS4rY0AEPwOsP4Nod0qoYI92jvQdLqiTxCXkpPVuO6McICnUL6slKGC3g+vWo2rZrFmzi0j0UAMPeeqpp/6PHf8ogKF5VLz66qufxucaMksHNnEIOqqKp5122pEg0CHe7qHPocp26aWXdqKqys+SqxOg/A5BRBVNex
                                    ypNIRkWurtnntrGWLc2WSlp6qKbGzeqFGjMw499NDWPDcdLJYZQJPJ7tatWxjeYUqnYbZhVxAwnzosLqf0tM+ZfaakyyPBHPYknjx58nBKXexRfVznGNjnZ9evX59N48J7oeRlqR+uUwPgroG9uRq24zjQ0ChI7S+/+eabsVgHzQCOHU1LYTol0YA7Ed6V3Pb/ojGFoC
                                    VgyVTomyFgL7nkErYaTlIB/zGg5UO47LLLgrFjx4Z9YrWEy3ozVWURJ1W2qGtF8ODG4QG3AyEcjt8PFjttOR7qXBDDBnF8hC1h5HtB1MOxrmvHe5wdYQelkrBBROpkmtiB2XRy4WH+BxK2IdVD5uBC1az1/fffH4HXNyDqWrBJuwB8h7GahZ9RAPK9NmdM7GrFo+fe2q
                                    pVq38D3GeyjxHT5Eg4dKQR5NAatg8dOrQACZ1jTPk/vqB6z/B2NXVzuy34u/mlH9hOi1KeV+z0009/mE4wAlbnO+nHoC31mD59+o9M1/SSm/elcSwH64dpmuj3JOl/GZ75Cm9XwwN6cAtRm6CHHWv9Fer8Tzg4VrNp48aNz4BK3gz3WpB2r4xECQvMQTuNAN5GMCfazp
                                    o1a+TPP//8w4cffth7xowZLCDgmIN8jp2eFO6yySWuc8l9zupwUsCq44npl5z7HBV3/8eAlgcnanfu3DnkoG7TZ+Oti0+ol3iZJ2lpaZCoE/D3cd6uljS0H/OLw0hB7mbFJElHpzOhFxHDTBXLdFUurbf0TQhgJ8DVEGrlIWRMIMBwqhqBecIJJ9QYMmQIkxSY73oYwW
                                    cBq97wkiVLkpgzpFvgxlNOOeUKSKCrWCnToEEDG6MmEMYOGjRoNRt+MzFFbXvs01pI6ym6NxFSNqH/sN4LC8ahFj8F5tCQ8VhR2eNq8XfffTfpk08+eUkcZe5+hcYmnu0aMhoOppJxHOH9QfUtjuf/KOxwxkvnAfx9YNLsFPOGzkL6F9bBxPmUL1yrJhjRKdDQzsae1o
                                    OqHHpnee8s+2NlE/bqpNatW590wQUXXAfwfv7OO++8D+BP2aW9hk3HUzovo+jAOqUMoD3RoELgUtiQ2cKm5ziTyPP/o0BLzn3uueeGfWg51NqMpvBcw99LLs/TPkY6dS3NqK7+3gCXImMmQY3SB2QrkiLAn9DvStah59gB++xkShFVDyWrad3o0aPHwTZ7DqpgqBITsN
                                    bDap1I0hxvM+zdE5s3b86hXGn0FEs9rifjFqc//PDD3QDqLvidUwq0YMGDJJwAybWcaqjEmG2XEL1nK2k5UGoLzJfTIOXacc2MyaqU5HUBpM0vvvhiJ6kRLuLE3OP7JZJuV3GvhOt4DkimGmeddVYNah78nbWysE/fNMXpmpQRZp+xuwY+Mwnqc3eA9UgwuXOhsp+GdZ
                                    UlaLi/LN9jYgauWfXYY4+99aSTTroCqvPXH3zwQY/PP//8JzDEdAVvhMT1nIwwF9Se0wo4kFz0MNPPOp7+0aDlccsttwTsxC6JBDb8kRTisGqOUWfSTJpdWgppmRK0plowcDynCf9z1GRrC1mityAIewuBMTXhz5yHROKkWTBp0qTxHKEBYjuRD5svdSJphweVkkuXLl
                                    3EWCzAXef888+/nyEUZpaxzlSrYADM9XfeeecDIOwakGBl+T8m3vM8TIIAYGczEyvfrtQwd5RFkqpMFRWqdiGqxfiVJYEhY9DKKF73+eeffwqSfSKHhLnSSRp2s//Veqz7MAYMcP9ptpqJ6+L9wSYOw0W4jxqmJ3XgpCoG4khkwkYWGNSPw4cP/+6XX36pCNCfAtX5Ao
                                    CXpY8ZNAm4J5S++H4Z/H4VmEurtm3bfgvh8EafPn2GErzMlPN2tz5K0/puh+H7xmGZAGJuJbUm9v8+44wz9kjj/zjQMhngwgsvDNtbQuUKLHBd9daxSwIz/DctQu2LUm9jjkfRs8DznLElduSJ4yTzbBmWUS1t47VtUOGOgFQIexHTE6oJHHjgR4HIijBBgZ5fbcNCqU
                                    NpwUQDVeUglTlbqDDs3gcBpIOY60spSuDwM5Aw2zp27PgoCHhGu3bt/s1zMYaqe8j9BJMYJxpJUkjHMildPytkzjzzzE60J7luhpJ0jQREz549B8Ae/1gcT3bagM7M8WHD1zzmmGPOhhnQilIazIs6sm+TLNQzjHMtgzr7gfHwp2x9K/YkvdGMibIRwXuwgXtCNT20cu
                                    XK52DPz8X1alJ74bpZJQStoAj29vwuXbqcefXVV3+N9y7Dhg2bTBtacrdjpn+ZNm/zjOYRuPF/SW3dK2D/kaDlzdPjBvXFN0QVH7Eg0i6WKrYodm9ahJ2WpB6bc8dMAXMQQcyBO4PIfXceom+ZifwzGwTLAvfC9PASuAQQXwBmEZay0S5T6cXPsKfW+PHjQ0am5wMxZs
                                    JG6wDJfCglHh1MKpUJ3ueee65rv379BkG9boj/HUMJwL/riA9I6sWw6yZJ6qMrYT3XMcV4NlTPo2E73sZ/8Zo8DwmUduyUKVMWv/rqq53pXdfcZzrcCFamUEKyNT7xxBMvBGDPAngKcS28RzprLEMmw2GrGKx95Lfffvsop/hJOmEsooInyQkovg1evyjpg+WEeI3FHr
                                    4EgJ4EwF6JPW1+9NFHp5E50mkF8NKR1apHjx6ndO7c+Zbu3bt/TvPcmFaqLVkPe+AlTsnwtbtoTo9/HGh50KEC9S6cpA01jBxUBzLZYdYxp7GW9drGIqSs5zia3ARvmwET6YBypH38JCoFjUc3kLCRqpc7QTRVAKTT+VlWeuhDJuESoFQPtTc0PaIg3m9AxCdCjSys6y
                                    E4AYImAF4+eoqp+qmjir9/9dVX/V555ZUBJDyck+VlGVRj6UVWkIGIJ69YsWIVAKXxZi9Cw4iHqUiQsDfvZMtW+hxoK/KaVNs3btwYe+aZZx5iszmcrxjvk55hJooA6CdCOrfBs2zC+6F6zvUzROP2ByMTmDVrFp03vYcMGfIfrfc1OcSxiASWIEWYTbOR+P0CLCWEOf
                                    AZZ/1gP4+cOXPmv8B4LgADTafty55l2M+SoLf38flr3n777QGyNzabTuPM1uSxqbbx69o5tP9ToOVx1113BYMGDfKhJoVqMlPZuHn0XrC3lIZSjCPId5MEHCL0IuKxkZ5jOxjM/u62yHQBa5w3aXayO+OTIPw2uI+SlDQEqE0E0cZjPAdVx09wtG/f/g3sAUdrFrZcnF
                                    5ggpBZSOop5u9QCac/9NBDb3i7alwZ+mmmtrPtbAG7c/aenG5m/8KCgEaNGp0K4j6bajDVS10LNYW3cEycOPFbJqQwYQT3VrNhw4bHN2/e/FKo+aFTSePEBKsmVOikdq14YrimV69en//www+PMSwnSRlR2WapQKvakG+yJXyR4HxAoWMM9vKvUL+v37BhQx9I8qfBKK
                                    qedNJJ4f5NmzYt7YYbbugG02HW6NGjf2MLW5tO6vhWPBN7ju8bGRxrfqM6MP5PgJbOkzfeeCM4+eSTw0ZwnFLA+J0dJeJIVNvR3XdsK1/AFbieYJeAnZ5VCb+7jikvuQLGc9chsc2SUH0v43cpVaO8kQQDVV2oriNuv/32F5iv60p9/ZlJKNI4IAQimMC2Tp06PQeCXE
                                    +7jBIWdmwdAoT2rK4ZUif266+/jvF2T1zwvMQOC3FzQkdeQDW/nryJ2oHkAYfvkIg/Q538D34uyySQZs2atYTq2QKfK0Kpr5U6fHaaIcTrELzsgU2mQ0BLPWv2qFGj3pOC+zQvutwuqsjd9dgHjkaVkCwipXaFIHEH4jILsdYPv/7662psrM+1ANTFr7vuugfHjRt3DW
                                    lN1mLP7RvVOe4DEHs8IGNjm1W2cCXz/Z8DrarJnMh36aWX+mrP7qpm8xPUU9cOc3KXPdPYzAVjEOFwCmzHAYmvxqWEhmEcl78fYRsqGLcdddRRl0A9rEoVkeqla//wd0pg2Flzb7311qchmXbic2GqpQUtP8dzqNOD/yMo33333f8OHz6cntvCzLiCGlsbtu9BBDaZn9
                                    TkUhWcPXbs2N/EweMSfAKBMzsJdmgrSNmWtIspNTVPGLbgKqiyr8BWvfK00067pl69erUJVG0OTvWZgNXui1JVRbAGkG4+GRc1AO3QCNCuYOqm5IK7tmvUZENbCuel0Baink34PzJErGMK9u4RrL879iSdSf08F7SJljVr1myCtY6hnW5itmlR6Z6uWi7N5nyANmW8P8
                                    37hx8sHO7Ro0eg6iNTxAQMCamNpnuALdCOSfFFtu0yIGVpCQngtteP/kwpqXadBNCTGnmZnkBeVLiHqh4kI6WVT5vQHSilLUQBsE2wqzpDCrBGN590eCikpXmuVFa1et68eb/Bju1rKofYq+lo2mVUw/V6km88C0S1XipiIu1Bb1cuM5lGGWg5d5NJ0vmkgORaIElWXX
                                    LJJQ/ffPPNT0DC1uZ9af6xndDOFz3fUHvnPPzwwy+NHDlyGL3Pmpml9zNnzpy5+N56ExdN6TEWxs3eVBvp7GJ3Dv5uk/89pw47ygzgSBeA6zuseSyTIJjQIxqB37Rp0xuMFmWjEWlGMPhmpnLc+80D6vX/pk1rD/bHpXrcrl07n+oV599yvIgTF417l002Upzbk5iU6N
                                    RTbO2UKO+wpujZcZM2ZU/VbheEKrmYyA+1uCE4ekOqTjbMY7SA0PH05JNPvvbtt9+OZvcEggYSsqBUBUV28ld79amnnuoBm3AdpayGvQCio1QK2+usWLFiube7YD+KmH0Zo8KJAP/B+etRLeZLwUhN4/DDD69rG7Op9sE94l4TvADiOqjQw77//vuvIdV+wXlXQ4voJR
                                    Pq4k43fhf2OL03O4ykjcrtjgnj3AppeNCpp556HZu/QSquwL71/OSTT77XxnzGqeinsNs9MV22cYYQTtdUW73ygD1+KhhiZdzHCqGjNJPcE59D67ZI0t/35oz6nwCtpjhCggSw93wQQ5gxJUXSvhF2kdUpNjnB2LORsVgTgghMt/yEdEKx+eLaeYTjIT4hAarx1QzzkP
                                    DVDrXqLqUYiG5Q165dP5aqonAIFtTRg8n1+R23pSp/JuGPGTNmZL9+/UaIrRbmNoOhFQFzCEdEagKHfmfhwoXTJHyRZMtLx8bNkDqlW7Vq9Xj9+vUvZqoiPay2SZuaDSpZtEuiMIXsCRMm/Dpo0KBvfv755yFQeRdLqVw+aBPlsOYK/Jzup+YMA7QzveTeYEm2KxM0AK
                                    aCV199dXfs57HM72XfKzC4Wl9++eUEdr7QsJNxGvl7CC8yIyqsDmMKJLtu8Gd2Z8Tv9ZYuXcoZwgWsmm1i755TyB8fsiWTCDx3RMv/HGh5MPMHBBE8//zzfpcuXUL7gQnaUnrmi1c5Xp2i8TMFlTaMdqqIdJJ3PJneJVL1dJI4pZF2IPNLEz5nRk/6Mv27CIjrVI2hun
                                    YsQQHCmN2+ffsuu7qsxNVWjts8hJ+jDavZYXbNWEtWt27d3sPadkiIIuyOX7Vq1QYAXnmu1aq0kChrRo0aNV5qe13AsrKoJGzUaxs0aHDlwQcfXIs2LF9R40CUkXHfSZxQM+f++OOPg0eMGPEtvdj0ljPkImV/3FN2a6xEldsdXcL72rBhwyLTMjdwzJU4eJnkAXX8Bm
                                    gQx3JtZIScVABm1AQ2dVXY7BMkVpuwVyaLzTond0JS14CEPYb3YquOSAPs5IlnE/MSa7nTdMay9Z1o1peaMkwQoQMuD7RykFA6duwYcKBT9+7dfUiasJG1hl+0aZsmE1hi14oLrdlVZ47afLTNmODArCQG4GnrgEACEKLPXFhcLzyfNMzWuHGCdFXg0s5q0qRJS0i96n
                                    x4tFut1OP18L/sTp06vbx48eLljHNqGh3DDVCZ6/JngtYFDNXsgQMHfgGg/Mo0RkPsWWw1Q8IlYLXfMNc7FQf2abHpJxUHLPOB27Zt27Ny5cr16CSiWs316f7YQ6UqCHotrj+ElUmQruPAPNaJLZ5PRmnGR72wOwcAVoN2OsGhz0HtebwKqv8houA83qSNa6pXr15zjW
                                    0zQYJpjxMnThy6bNmy37TVq5286AzIsuG5LXQQ0hxhVhntf01S4TnTU48C9E0oMPSyK3NQlV/SNvPUY/egM6Nz584BAOyxd/I333zjc9wEVRPavVFeRbW9+PAJBoZY6KEGuIJGjRqFqhZVyogjPBlUWR9SMeTKqiKLqphAKPpgGzdufCMdROqo0etr6GfAgAGfffTRR4
                                    Mk/S/eqJ31pvQ289xcpyUA4eZb33vvvT5qa5kEEY7hOJTnpxTXg/cLwE6UfOMMa9OKbZYFxjEC36kNgGfYonYXsFDJf/nss88+GTt27BiAZrFEaThSpUhEt33dkxikdz3VHOyzYWYU7petZrPUpnUbgHu7k/GzoU4vZDGFjsxkPTLHj7KhO7tLarw8wpMc33t8b8ORRx
                                    55Dp47h2GHvYjZWJD7TAlJSQnpP1fwlTTK0o3Z67Atfal2lwfaFAdBds4554Sd7ugB5HAmpsPxIcyZM8fXsAI3Etw+oMOBICJg6QDKwaSC+HHEEUeE0tV4Pv3E8ttdhQps3g1J3QDnb8YHqhU2qgFwzSCMBY899tgrUj4YjzkzowiEVByEXEJVUJPMEdpeYE4/wGacqt
                                    PTRXUk2DkX9yBNuFDCgjq/HRLxR7H3AidZhPfj9+zZ8+Hp06ePxHdfxx7lp8bhTABgbHZEhw4d2uH+OFOooDi/lKlle8kDvuIVWmB0tSQ3Om4L8/7AcEdOnjx5sJkhHEuRshiO+Bg/fnxfmEk3M5OJGhHPee21114HaT943bp1O6mlRIXgvN3plWEoq0WLFi+ASRXm3F
                                    zuF8/Hc0EhoZ29ENJ2vJQuJmTEORU+brJNQsudPNDm4KCKQ2Ljaw8ZP/t8zJ8/33enq1vpauyfnccee+xNLASn3UUVUIHO75BxPPTQQ2+DuSySqpiE7g5szgaw5uf3KCVV0tKehrTe8Oyzz74haZIxI9E47qQ+GELohKJKrq1mIGWnjx49erqoxkmhHmFE+WbNmjWeAF
                                    +xYkV+Osi4n6bd7PY333zzeXb/wJqKmv3VxgSBKx3VU4fvpxXlJGcpMLBOP0jJ2fTSSvO3lHNzCXwCe8aMGb9g3/rVrl37QjYzpyqP5316165du9x11133rV69mhMMwqFjastqLjSTXM4666w7AdpbsccF2QaG62F+N58Py/h4TjD7t7ANq6VReba1j73EFFbPZsTZ8F
                                    oeaPeT44cfflDniW84bgJgGdsFIVWApD2Nn6E0t84ngnjKlCnjmeNqBxkb7+kOgLqu5hNbG4kE+tVXX30GG26WNEzLNuDYAUKsTweQNvvWWb4wGaYDGFukztXtQKgSgvZwI3yvKEFqB3fzXFCJB0AijhfbO6m80Y7IcLzTlJxMTSxpwm3xBBEwg5UCiKT8Yh0WZlqVcu
                                    9j/fv379iuXbsjtm3bVkM1Cpg2133xxReHdevWrXOfPn1+kllD4eSGUqVKlQMTbQWQtsE91qKEpqZF1ZyApTONkpahGqj8wyBt3zPtaROGallmZcJAcYmrVVWuLyIPtH/DAQ7OkrE4N3VSJeOgpYcTRHExgBNmQKlNqv2awO1jnTp1YqPzrRpb3Y3pUMVlFdAhJHDapU
                                    rk/C7U/5VdunR5U9TcbEebyAZDaKQqtAUkCHOEt7uQIrJlCrOkmjZt2oaxZzUb1LEC4s4aOHBgH7E5vQjp6qq1CaDFPeeXetWEPsc0Z9hJMaKzZdyudXsKkynhO4s+/vjjK1u3bt0XjKQiGwCIt/aoRx99lHnbM2Gjs0902Bsa5gluqVJpZoepR52+D0j5cD00p5h+CD
                                    t5xrBhw+5gt0nHYWc7VURVgSXE+umv2NPg8zzQ/kUHHmZYSK1TxyNisqEnkZKKsVkShu2hJCly3qeffvoRJPYEja06BE5Pbn6egw9dr0VioIR++umnX4SKvkzAnmUkeNgRAhKlEn8Gw4jHEgGMDbD3phPoboGESUrZThu8YsWKoQ1OR4/NugJgvx87duw4O+YxIiRjQW
                                    dT+2IA/QbO38HPFemM01lElHRM3dRiKM8ZbuVmNenPXAdU2Qk9evQ4t2XLlq8BsOwbFTJUmAJpuP869erVq0OAaphPSiBDoDJUqMk2zIPmzFsA9jc8l2twrqURw7aCFFJXQz0JfZPJRPKSK/aDY8CAAZqoobm5nthNvsmA2gYV9TRw9VMpqSjxNGwi6uomSMq3dgmaNM
                                    9zRlWQGEA0ayZNmjTw9NNPr8Nr0DtKdbdv377vvfDCCx9JyVm2BZ23awQmvb6khx0FmHkiNhYYzQJIksX/z961hlaVXeF94gvrzEhbR2hFNK1DrRhEIVTja4xSBMFxwLQUq0j9oRXKQNM/UhBR/CEK1QaNitCqaKh/RsSgoAY1MkYHhfioYy1VdMRKBFtsi0O993R9p3
                                    sdv7POvklmrNcUzoLDzePee3Zu9trr/X3+hsF4EZtO7odZ3yE4WHSUTxN4p0+f/pgsidKzqDVMJ3CYiIqTN0hcnTt3bvOSJUt2y3pGAf8Kn4/Ejn8VuUWeg21ZVLZEBTyIqU6Mxv/P2traPhAP4SN5r581NDSMhusL5UR22UxHOa6lQnGhsIhhe3p6zonCfoT+Z6KzzL
                                    j+rMAWH4pzHPjcZs2aFRdK+4YF7W0o4lPfcMTtbFTmieWU/QDP0TKPWlnEOaJ4bRI33fexpeWWif3o4VBRkl1ihf4h1m20KNMosQR/3Lx5M5R9sBI+cc0QygKcKP++w9Slxnplc6IZ/19mM8ZUp30ua/2exHjzddJIXVhf370lXsYFb30y9VNq5C/R99Y9BrLiEPT5io
                                    L+UA6hcfPmzVuL+Fli099I7Nnjs+AlZzh5yEXmFm8uZQEj+QvxBDaIl3FIlPCXjY2NK+VQiHDQwR3WDixt5EAvNKZwEMOK9X8O9ofLly//Fi4xWViuEZdsCUpdZAZn0No/vBRY/UJp37CAdRzExlq/tC1s0BxkVeUf9p5smB9pPMouJrLCra2tf8CBHKBDTE92WD0kUS
                                    R+3o6fiQtY4zf+1zwQ9gtbzgA+c21t7WTZpO9goELZ6LBZJRb/3EOWDnN58O3k/WbMmPFjuOUoRWliR+u7YiGPi4v9d5/lZmoWy0iXcWvdy5E/XcuQR48e3ZVY88+iwBflPt+Ug6mHPAdGICkFWOpzCJ3+ffH5vCPK+LlcvwDHU11d3c/l8Hl/5MiRb8HDUYABHL4S58
                                    IS/1sOkJOyjh3yeBWMgxTDlqmElbOwNuHms9rJI/aGHEiVav2F0lZTLl26FHk3NzNYr+1s/usvxHq8LwrzDfzTdARP2xXPnDnz8Y0bN/7iT/NKYOepO+Y7nXjgWpUjsvVHuMRyz9Hymq/jXlA8bCBPen3NHAwZAHiUb8aPH9+Ivw+uuLZMehfynxcuXDjN/LsBC8sUkH
                                    ZD8zqTPk3M+qIEIwqbjOIFoG1jImrWZFdshwD8/6JMBN1QuqH379+/IH8zGkUmiKtfL4/fHzFixHfk4HwbGXRQbkrce0Ji6Wt4D+33NhY2kxhjq2+wkDPlP3xm4KXqaz8VSlsFuXnzpvPxLNdl09odkj+iKG9NmzbtJ8r4rZlEWCtYv5aWlkOEdBEiiAo1E4Qkp7RQBH
                                    Hf20XpZkpc91MgRaDVEcTRp06d+sRkmx25xoDBeVfWPhrr0tlb9Q7Onz/fcUvE0EuWAskndpHLtkbOiqYhhW8BLRnLGUTKDExk8eHJaJKRPxThYdyVWPVPXrkQVgzytJQlD1qvuMd8aGRiWNNWyWByPMSQkkbLZ+/mzJnjCqV9w4J9hN5m6g5iBMHE2iL7Kq7xD0aNGj
                                    UTLjTiV66tdnd3d4or9hkgVHtR2JILMLHx4UDteRmWO0//+eLIkSO/Eivz6cWLF9+TzfNtid2uS0x61/P+lO1BALf5WyIgq1Z3mssZ4mGcIpcwNrXUzGA6M6O7/CQV4ytF1GpoJ3Ay2Vmt0xKEDKNGpmRs5L5qWyfgWQd7lzei5BXfL5RTyFj5Cu6xzSSn44jNzc1xfz
                                    rsCqV9zYLRMZR6PFcLl3sYoeLFhAkT6mHR0MuqMRSej+/37dv3O/mnoi47QjciWy1bPmGyJzuRZBVWp2OwIZHZ7uzs/D0216FDhxA7D/YJqFKFP++F73sehDXzQIVYqicSz4I9cCitOeQVsFvMQAK27Y8VLQi6x5jSgYH2EMdTpk5OB5tFmLB4YdyWGKL9yLHk8QHCrY
                                    tI1CNbDdhftNP2Rwqlfc0C5dNGf5ymWvfTze1rs8MmTpy4SBv1tbyA2uqdO3eunzx58qKfQGGFtTXJzKY3liDi1j/GU2YrBsX1pNQReQUlqxjsWqKTSktYKn4w4PyTJ096PGGZxWxKIGA8LUv6c2S2K6BFKIpmiDPIKmImScelJkpsMW2BcnWmsKcuzEvkXLbxP7bMFY
                                    bsLRdXqyusz0FiEHsCnWtbt26NKw8GFUpbVUExHmUCVlayCgkxNFD8xQ2epGgS+ohrzZo1G58+ffo333aYcY3Jwpase8lojsbisoXPuJysFFxD5qkXY62T+yN+RSwOZfUNHfHRo0cPeJJk686XTJ02tUoE+5Mjo3YvCcLtLCpb2Mwjg8MbDK9MjMwIEkrDQveJ6LPizy
                                    A26IqZ0psLsMBDYaGoXnmTPYGurm3btrneaEAKpa2yoC9VXV22VIRqMejx48dPurq69s6cOfPXIH4CEh+a/bdv3761vb39HE3jOFuL1NomWyzjHlpCHFa8nMXlDWt+n8bh+nq0Lt67d6/72LFjzWPGjPnus2fPBvX09DyVGP5qR0fHp35ipkQxINdnywELXCaysZQSxN
                                    8rNvAsnBdIFYnImbmZIjYoEZZRkUHXQjC6UQVI0wwvk+GLsiD46fp8gjFhx1u3bp1bvnz5lxpMifpiQC/k1QRN5A0NDZGHAo08LhSDfCEriccXkyZNmj1u3LhGiW3elTj4+pYtW9owPWMGqmPjCnPx3k7LJM/nCSGDNMkuYI1J+rA7aOd9HQ3rw6A+97+v8c/BfOxwg7
                                    FkE04Zt967zLkkDSFfRCHUR+28Uiggm+F2hNel4Uogix5iR3AUQ/eaa7SWtkI9Oz08VGHFi3I7d+6Me5voKZT2DQhQDKZOnRp59nFbm02Q+hBOeiY7IOxjmBvJG2Qvh1v4k4DS5pI4JtMbE3yOo82YGVpgBMjA185YNxeI/TJog85AhJoYL2dp1cp6nlbr6kYhviAL/s
                                    7zt2x9QwkrjxrhCD3EUnRmDorQAHvgkMi45KZ1M6Gy9AMUbvXq1W7Xrl1fWmH5dC3kNQncXNQ8Azw+jor+ZY+WD9Lit6GsnkLR1jXTBI7NuDLEq8uPvVmXTWPIsoFpYWWyPcFcS41pgsa6vdooUaL4tWRKPWWOX9kiQWE9BEtM4G8V4U3x/AqllOQAYOoQtGVC/ARN5j
                                    UmnrbjghlIXfNZ889SF5nuHfv/beLqI4Zdv369271791dS2CKmrYKguwiMa8CIorG82CSFciUarRfyia87S5/P9U+1ZDzdEgJQJ/OhpFOZuqdJruasrLFGbJFruHbKySvDC5y2W3IpJJA8Sj4D1C0JAC8De6slNB4k5995xU3dYqURMXF9prxEf3zMwGvaG8yuto2X2a
                                    tRbwGvxT1R1kHTDLhnm5qaXmlPFZa2CgKEA4/Sb+O0zEnvLUwm7nOV2/5CpFJl6ozPlCIQR9l6ok/uxGSNc4khk+DKTdG4bBdQiWLV4JrNnGvZ4EKlSTpYKmSjGS8J68VniN+pG00oD+nPPQVM0mVEsKbJhffCz31yMNb/icuDx6feiu+ESt/fvWyVLIcsvI7a+XUk1h
                                    V12M7OzldW2MLSVknmzp2LzWHLJjleID+Bk6kXBpojMj223IUTSnzouJehI4kZAcLXWW17nzPEZM5Y0KhCTJxLt7JicmmHDw0uUWGzo37pgc0T64iN//Dhw3RkjmhTcjSRUHYA94HiE9jGdXV1MWremmPo7u6Ojh8/7s6ePZu8H+6nMDZAFXEBTCfN+qpYLGl9vsLuan
                                    0eBzbI4KC0/yspElFVEJzs06dPj9CDTNhDmcYG/1jjwsX9UKayHIrlOHvpu7CSr3W6yFss5zOvjOOb6lqoNhsYdnC2LGIyz4H8T5wrhfjDQuuYSYcQEjWYa92xY0cMVjooLSwmCJ2Bw3T79u0Ij3geBtAxd4w5XjSmAN8LAHp4vUe9rCgIWcBjfOzYMTSDpJll3E/Z+Z
                                    SkzLvX6WmrcDrMi6RjlFgP1o1SzqJFi3pFoSiUdgDLxo0bow0bNiQummc1sNYpst+bODJTRqDYOKiwsB7YbIil0AqpGxgHCKyNJmTUYrAC98bsHiq7hB6568tlGQUZzZHd9GTNWB8UTixhDOzovqQvWsj+CCzi1atXMeAQyQWm+wSN07BChOPL/7IOJhAxgNGFsi5YsK
                                    Bfay+UdoALXLv6+vpIMZVJSTJlIHYt2WpZ8mvrKquL6wHXE/cSSrls2TK3du3aGMPVECjxtWvXEpxnuRKsIx14V+RGXzfOKIYdduhFYZPXa7KG+ZF4/XwAsVuJQw0sEH0Ngr/uMh3mn2HFYd0fPHgQaYihTBH4+2praxO3G9Ydw/+9gbEVSvt/Knv27IlQUIfVg0UhhU
                                    3rhhRXRuqqafaTM5Quzw+bJj8Q/+Gk37t3b9zY2FhxPYBMAa/RkSNHIsR3QNy37iHd2ypyRHF2jh40cNgwV2+m2QBrVqsmB0mvay6kUNqqCjbmqlWrogMHDqQ4Srr5WXlNaYabCBh1P1Vaj1CfxFmI82Cl2traYiRj+itwB8Gw0NHREV26dCmxwFBqbcpAoobgWO2+yb
                                    UVsvLaRgRkdhVVHwqrYG2tra3xihUrio1SKO3AEijChx9+mDD36dA44yBTNjZjqRiiRl1hjam0bAGFXbx4sdu/f3/cF2RJbwLXGhhIiPOuXLkSIUmDr+Haq3voM7eRtabuJYRNJunFg+iKQKiHDBAvDh48GANqpZB+iMYrxVW9CxjIK1euTPxgsWAAEQMlJa4aXPKz9A
                                    KGEUDX+Gd64TUA3sdIHb7etGlTBIV7HWtGprWlpSWaP39+ci9du8SgkXgNubVj3bjMemv0+VgzpKmpKQJucLEv+n8VH8IbvMQigkEg2byo42IzDx8+PFGKCkpag+dg4+M5KB/hEgsVgUSsGmuGlYQb3dzcHE2ePDkSa5muH2vX9fGlf5OvVSfKPnv27Ehi6WIffIWrcI
                                    8HQFb58OHDUXt7e4LaiGkgJZfSsowW67khAtlglBeWLl0aL1y4ME1YVVPg2iL+PXHiRNTV1ZUg7WMwgomvIYiH4a6jnRNJJllvXF9f7/o79F1IEdMOSIFidnd3g+8nAsUEcKVQnkFCCMV6NA7gccqUKQm1IgCt0VAwkJJsSGYBE/jx48cRSiWQsWPHxsC5Ao4ziJwLRX
                                    11+Y8AAwBoyWXB6nvLogAAAABJRU5ErkJggg==`,
                                },
                                
                            ],
                            
                            [
                                //codigo QR section
                                {
                                    border: [false],
                                    fillColor: '#8b0000',
                                    width: 75,
                                    image: `data:image/png;base64,
                                    iVBORw0KGgoAAAANSUhEUgAAAa4AAAGwCAYAAADxKYFxAAAACXBIWXMAABcRAAAXEQHKJvM/AAAPt0lEQVR4nO3dsW4dSXqG4ZKxwWSjcIIBhhewgBg6E3kXU9ES2BuQr0BS5myVOqOjugyRoTNOvgEn20ABnW1G42DbsL0jrXX+pur013wewGG7+1Q3+9X0An+9eHx8bACQ4p/
                                    cKQCSCBcAUYQLgCjCBUAU4QIginABEEW4AIgiXABEES4AoggXAFGEC4AowgVAFOECIIpwARBFuACIIlwARBEuAKIIFwBRhAuAKMIFQBThAiCKcAEQRbgAiCJcAEQRLgCiCBcAUYQLgCjCBUAU4QIginABEEW4AIgiXABEES4AoggXAFGEC4AowgVAFOECIIpwARBFuACI8rstXewY46q1draBS9mTm977zbG/Z4xx0Vq7qKxD7/1d4XyH+35VOV+Q+977dcLljjGOvocrTX9O+aLNP6ebCtfy4nq9gevYm6NfCMvL4G1xHSovvbMV50tx21qLCNeJ7sXs55TP2/xz6lMhAFGEC4AowgVAFOECIIpwARBFuACIIlwARBEuAKIIFwBRhAuAKMIFQBThAiDK1obsVv1na+0u89K/2nlr7fuJ57tfhm3O8rDifNXBzL8uv3OW0jMaNjm/uqYz78N/m/l8n8Lsd8Y0ewnXXe9911sbjDFuZk7OX7Y1mDYhuvd+V92eYozxWDztdWULlhNImpyfsqbNOyOXT4UARBEuAKIIFwBRhAuAKMIFQBThAiCKcAEQRbgAiCJcAEQRLgCiCBcAUYQLgCh7GbJbMsZ4uUxQnukwEPgha6W+3po17b3fnOiy4auc6J1x33s/xfT8zXrW4VoewI+Tz3nZWtvzC3rNmr6oHNR7Lx3HP3TpHxKfdYp3xvvWWsTE/
                                    Vl8KgQginABEEW4AIgiXABEES4AoggXAFGEC4AowgVAFOECIIpwARBFuACIIlwARBEuAKI89+nwfMEY4zCN+u3M9RljPBYPLU0yH2McjnldPGfFbe/9YuL52rIbQcXHMcbM63zfezcBna8iXLBj1a1JJkcLjuJTIQBRhAuAKMIFQBThAiCKcAEQRbgAiCJcAEQRLgCiCBcAUYQLgCjCBUAU4QIgynMfsnu3Ynr2mnPyedV7UV3TN621l4XjPrTWXhXPmaJ6L/a+Nqd4Z9xPPt/mPetw9d4fWmul6dk8veok86reeyl4Y4yHvd/+FVPld7023hnb4FMhAFGEC4AowgVAFOECIIpwARBFuACIIlwARBEuAKIIFwBRhAuAKMIFQBThAiDKXobsno8x9j748nwD18DfXBcHrT6HKd/VtZn+9+udkWsv4fq+tfZ6A9fBM9B7v3afPy9sbbwzQvlUCEAU4QIginABEEW4AIgiXABEES4AoggXAFGEC4AowgVAFOECIIpwARBFuACIsrUhu3cbuIa9qU4kPxx3WzjuZWvt1cw1HGO8Kx5603vf+4Twvas+p3zZ5t/DmwpX7/3NBi6D/5nyffSk7zHGRWvt4
                                    +Q1fLviWOEKVn1OyeZTIQBRhAuAKMIFQBThAiCKcAEQRbgAiCJcAEQRLgCiCBcAUYQLgCjCBUAU4QIgytamw5csg10vZp6z916aSL5iknmKs53/vlN42PsE9DHGVcqzU/3bn23Fmt4vw4s3axfhWqK1ZkJ4RfXhnX2dhOu9383+h9kJHF6yr0OuNeUfn9U1vd36xH2fCgGIIlwARBEuAKIIFwBRhAuAKMIFQBThAiCKcAEQRbgAiCJcAEQRLgCiCBcAUTY1ZHeMcd5ae1k41ERydmuMcfibOJ/8++567w+eKrZoa9PhPwRNiC7pvb+Yeb4xxo01jXeI1sfJP+KytXYz62S9971Pv59uz2vqUyEAUYQLgCjCBUAU4QIginABEEW4AIgiXABEES4AoggXAFGEC4AowgVAFOECIIpwARBla9Ph3xS3NeHp/bLcj2MdJpn/aeb9GGM8Fg9933t/VzhfdeL+rSnon5eypmOMixWT+i9779Mm7u/ZpsLVe7/bwGXwNw
                                    +VP7IxhuUDvimfCgGIIlwARBEuAKIIFwBRhAuAKMIFQBThAiCKcAEQRbgAiCJcAEQRLgCiCBcAUTY1ZHf2hOiVk55nK00yXzFx/+cVU9cvi8fN9naM8TbgOu+Ka7pmUv/HyQOT/621Vnm+y89p7/1F4bDqvWgnWNPqO2PztratCU+sOnF/iXqJrRueVu/
                                    9obW290n9fynuRjB1m5jqvWh2TnhSPhUCEEW4AIgiXABEES4AoggXAFGEC4AowgVAFOECIIpwARBFuACIIlwARBEuAKJsbcjudXGA5Y/LZPljfXeYoPy0P+GbqQ72/LBMCT/Wp6C1mX2dV621nwrHnRef06rKrgBr3Raf1eq6VI/7YfK9aMsE/L8Ujqs+b7v14vGxunPFdowxDqP7S9tTFLc2iDF7q5jnYMWaPgcRW2mcaEujy+IE/OrzttttTXwqBCCKcAEQRbgAiCJcAEQRLgCiCBcAUYQLgCjCBUAU4QIginABEEW4AIgiXABE2dp0+Kr7ZSr1sb5bBvQeLWh45d3k40rGGGfLFOwEn4rP29kJpnxXrnON+8nn48suiu+3+9779ZbXdRfhWhb56IVeOSE6Ily99zcbuIyvcVad8H8Cpanba3YxqDLh/1l7Xd0ZovI+ncmnQgCiCBcAUYQLgCjCBUAU4QIginABEEW4AIgiXABEES4AoggXAFGEC4AowgVAlE0N2R1jXC3DVo9VnWb8MHuq/GF4Ze992gTtE6zpKfyy3MtZTjEBffaU95IVz9tsP5xgTX9eBnsfq7qevxaf1ak7Q1RsbTr81cxpxr33ww06+kFaOVX+ZvKLb+qansib3vtNyLWWBE15rz5v0/
                                    XeX8w85xjjcfJvvA7afukoPhUCEEW4AIgiXABEES4AoggXAFGEC4AowgVAFOECIIpwARBFuACIIlwARBEuAKJsbcguXzDGOG+tvSysT+UY2L3ipPYkZ8Xf+LAMIN8s4SpYJpFPnSzdWvuQMnW74kRryvNW3eEhxR+W/zvWbWXXjJl8KgQginABEEW4AIgiXABEES4AoggXAFGEC4AowgVAFOECIIpwARBFuACIIlwARBEuAKJsbTr8m+I2HD+PMR4rJ+y9Hz2RfNkqYO+TpV/PXFOeXthz+u+ttesNXMcWHXaGePXcF+F/21S4qnvAPIN9dWDv7petbfg7Y4wHa/J/
                                    +VQIQBThAiCKcAEQRbgAiCJcAEQRLgCiCBcAUYQLgCjCBUAU4QIginABEEW4AIiytenwVYep0pUBnefVCeittcvicdVp3bOnZ1+11v4w62QrJ5lfhgxoPcVzOlv1Ob2vXOcY411r7W3l2KBdDKq7ZlRtfqjvLsLVe7+vPPhjjDXnLL0oV5xz6vRsE/
                                    ef3ime0xMw5f2JVXfN2DOfCgGIIlwARBEuAKIIFwBRhAuAKMIFQBThAiCKcAEQRbgAiCJcAEQRLgCiCBcAUTY1ZHeM8eEwCbtw6F3v/c03uKRv4X3x/2d1qG91Tc8q51vOWbnWNdOvP4wxKhOtr3vvMyfuV92veG5m+33x/lfNfk5PIeU5nWZr0+EPL9jXG7iOb6b3/m7yKU+xprPP96p4XMSLa5kqP/u5KVlikPI3nHKdpu3/HZ8KAYgiXABEES4AoggXAFGEC4AowgVAFOECIIpwARBFuACIIlwARBEuAKIIFwBRtjZk927ycYeJ4rdP+gu2p7o2z8GPY4yZw2vvU6Z8r1iX6rT2X5cp+Fv3csVQ56nGGFfF+7H553RT4Zq9NUnv/fBSv5h5ztmCtnuZbplk/seJ5z38Iylle4q3k893fYKdE442xji8Lz5u/ToXV8UJ+Jt/Tn0qBCCKcAEQRbgAiCJcAEQRLgCiCBcAUYQLgCjCBUAU4QIginABEEW4AIgiXABE2dSQ3RXTjPmym977TeFeXMweQFwdsrpikvmnybsDfJo8jb68pivW5by19n3x2KONMc6q74zK38VKvyw7UhyruovBbt+lW9vWpDrNmH+s8gd6cYIJ4dWXbPU638+cSL68fCLWtPde+kfLMnF/5t/w1Yo1ffHE1/L/eVP8R+TsXQw2z6dCAKIIFwBRhAuAKMIFQBThAiCKcAEQRbgAiCJcAEQRLgCiCBcAUYQLgCjCBUCUrQ3Z5RlbJtLP9EPxnPe99/s936kV9+LlE18K/MZewnVbnWadYvbU7WVq+tGTxZcX3sfiaavHXa6Yul055/sVk+xLeu+zJ5lX78Vs18XdD2Ls/d1W4b+4gFjLf/nu+r9++S3/
                                    GxcAUYQLgCjCBUAU4QIginABEEW4AIgiXABEES4AoggXAFGEC4AowgVAFOECIMqzHrK7cpJ5VWmSeZC7w28sXO55a+1Pk3/mm+I2HNWhrrufZL7C2zHG29ir/zofxxiV494vuzWwMB2eJ9V7f6i8nIt/0Kv03u8mn88kc3gCPhUCEEW4AIgiXABEES4AoggXAFGEC4AowgVAFOECIIpwARBFuACIIlwARBEuAKIYssuTOtHE/erU7aqp07rXrGnv/UXxtJUJ/2t8aK29mnzO2bsY/Muye8Kx/nXy5Pzb3vvFxPMdTbiA35i99c4Y42H2Xaj8xpX/
                                    QLornvOva066Rz4VAhBFuACIIlwARBEuAKIIFwBRhAuAKMIFQBThAiCKcAEQRbgAiCJcAEQRLgCiPPchu/eHSd8nOOfmjTGuWmtXhev87gRrWp2cfdtaqwyT/f0YY+YQ2uqa/jD5Otf4c/FeHKaYv66ct7g2LyvnWnwoDhOurs3h7/enwnGb96zD1Xs/RGTa9hRhzqovhN77P8/8qSu2fLipbE+yvPBKa1NVWdMTbTFTVb0X71bci6n3cMW2LdW1udhruHwqBCCKcAEQRbgAiCJcAEQRLgCiCBcAUYQLgCjCBUAU4QIginABEEW4AIgiXABE2cuQ3bNl2OaenaX8thPci/9orf21cFzEpP5WX9M1z8wvrbXKJPPz1tr3K86b4HbyNf5YvP+fitd6Vzhmqr2E66cVW1vw9Gbfi8vee8r2HVWz1/RNZU1PMTl/tt77xcxTLmv6x8Kh7ytT5RP4VAhAFOECIIpwARBFuACIIlwARBEuAKIIFwBRhAuAKMIFQBThAiCKcAEQRbgAiLK1Ibubn0ocqDoB/f4EU7CrKlPM13gOz2l1Tatr8xye06rZa7p5Lx4fH/f62wDYIZ8KAYgiXABEES4AoggXAFGEC4AowgVAFOECIIpwARBFuACIIlwARBEuAKIIFwBRhAuAKMIFQBThAiCKcAEQRbgAiCJcAEQRLgCiCBcAUYQLgCjCBUAU4QIginABEEW4AIgiXABEES4AoggXAFGEC4AowgVAFOECIIpwARBFuACIIlwARBEuAKIIFwA5Wmv/Bc3oRD/eU8GKAAAAAElFTkSuQmCC`,
                                },
                                {
                                    border: [false],
                                    text: [
                                        {text: 'Nombre:\n'},
                                        {text: 'Tipo de documento:\n'},
                                        {text: 'N° documento:\n'},
                                        {text: 'Telefono:'},

                                    ],
                                    fillColor: '#8b0000',
                                    color: '#fff',
                                },
                                {},
                            ]
                        ],
                    }
                },
            ]
        }
        //const pdf = pdfMake.createPdf(pdfcupon).download('Formthis.data.input.invoice' + "-" + 'this.data.input.registerDate' + ".pdf");
        const pdf = pdfMake.createPdf(pdfcupon);
        pdf.open();
    }
}