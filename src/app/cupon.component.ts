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
                    image:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACWCAYAAAB3qaIPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAQpRJREFUeNrsfQdYVUfX9aELKAoiWChiQQXF3sUO0Rh7LzH2aNQkmqixxVhea6LGaGKLr70bey9YsBdEBU
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
                }
            ]
        }
        //const pdf = pdfMake.createPdf(pdfcupon).download('Formthis.data.input.invoice' + "-" + 'this.data.input.registerDate' + ".pdf");
        const pdf = pdfMake.createPdf(pdfcupon);
        pdf.open();
    }
}