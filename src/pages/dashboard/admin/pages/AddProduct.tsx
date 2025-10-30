import { Box, Button, FileInput, Loader, MultiSelect, NumberInput, Switch, Text, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { PiShirtFolded } from "react-icons/pi";
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { TbCurrencyNaira } from "react-icons/tb";
import { TbNumber123 } from "react-icons/tb";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { FaRegImages } from "react-icons/fa";
import { createEulivyProduct,  } from '../../../../server/services/productService'
import { Product } from "../../../../server/models/all_models";
import { useNavigate } from "react-router-dom";


interface ProductFormValues {
    title: string;
    slug: string;
    description: string;
    price: number;
    currency: string;
    images: File[];
    variants: string;
    stock: number;
    category: string[];
    createdBy: string;
    published: boolean;
}



function AddProduct() {

    const editor: any = useEditor({
        shouldRerenderOnTransaction: true,
        extensions: [
            StarterKit.configure({ code: false }),
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],
    });
    // const [editorDescContent, setEditorDescContent] = useState(editor?.getHTML())
    // console.log(editor.getText())
    const addProductForm = useForm<ProductFormValues>({
        mode: "controlled",
        validateInputOnBlur: [
            'title',
            'description',
            'price',
            'category',
            'stock',
            'images',
            'slug',
            'published'
        ],
        initialValues: {
            title: "", slug: "", description: '', price: 0,
            currency: "", images: [], variants: "", stock: 2, category: [],
            createdBy: "", published: false
        },
        validate: {
            title: (value) => (value.length < 3 ? "Product name must be more than 3 characters" : null),
            category: (value) => (value.length === 0 ? "provide product category" : null),
            description: (value) => (value.replace(/<[^>]+>/g, "").trim().length < 20 ? "Describe the product with more than 20 words" : null),
            price: (value) => (value <= 0 ? "product cannot be free" : null),
            published: (value) => (value === false ? "new product must be published" : null),
            stock: (value) => (value <= 1 ? "must have more than one in stock" : null),
            slug: (value) => (value.length < 4 ? "slug cannot be less than 5" : null),
            images: (value) => {
                if (!value || value.length === 0) {
                    return "Please upload at least one image";
                }
                return null;
            }
        }
    })

    const [checked, setChecked] = useState(false);
    const [files, setFiles] = useState<File[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        addProductForm.setFieldValue('images', files || []);
    }, [files])

    useEffect(() => {

        if (!editor) return;

        // Update the form whenever the editor content changes
        editor.on('update', () => {
            addProductForm.setFieldValue('description', editor.getHTML());
        });

        // Cleanup listener when editor unmounts
        return () => {
            editor.off('update');
        };
    }, [editor]);

    const formData = addProductForm.getValues()
    const productData: Product = {
        title: formData.title,
        slug: formData.slug,
        price: formData.price,
        categoryId: formData.category,
        stock: formData.stock,
        createdBy: "Gerald",
        published: formData.published,
        description: formData.description
    }

    const navigate = useNavigate();

    const createProduct = async () => {

        try {
            setLoading(true)
            const res = await createEulivyProduct(productData, files);
            console.log(res)
            
            console.log(res)
            navigate("/admin/all-products")
        } catch (e) {
            console.log("error while creating product: ", e)
            setLoading(false)
        }finally{
            setLoading(false)
        }
        // console.log(addProductForm.getValues())
    }
   
    return (
        <>
            <Box>
                <Box className="dashContainer flex flex-col gap-8">
                    <h1 className="text-xl font-bold">ADD PRODUCT</h1>
                    <Box>
                        <form action="" onSubmit={addProductForm.onSubmit(createProduct)} className="flex flex-col gap-4">
                            <Box className="flex gap-5 justify-center items-start">
                                <Box className="flex flex-col gap-2 w-3/5">
                                    <TextInput
                                        label="Product name"
                                        placeholder="Velvet trousers"
                                        leftSection={<PiShirtFolded />}
                                        leftSectionPointerEvents="none"
                                        className="font-semibold text-lg"
                                        key={addProductForm.key('title')}
                                        {...addProductForm.getInputProps('title')}
                                    />

                                    <TextInput
                                        label="Product slug"
                                        placeholder="VetTs-3454"
                                        leftSection={<PiShirtFolded />}
                                        leftSectionPointerEvents="none"
                                        className="font-semibold text-lg"
                                        key={addProductForm.key('slug')}
                                        {...addProductForm.getInputProps('slug')}
                                    />
                                    <FileInput
                                        label="Product images"
                                        accept="image/png,image/jpeg,image/jpg,image/webp,image/**"
                                        placeholder="Select images"
                                        multiple
                                        clearable
                                        leftSection={<FaRegImages />}
                                        value={files}
                                        onChange={setFiles}
                                        key={addProductForm.key('images')}
                                    // {...addProductForm.getInputProps('images')}
                                    />
                                    {addProductForm.errors.images && (
                                        <div style={{ color: "red", fontSize: 13, marginTop: 5 }}>
                                            {addProductForm.errors.images}
                                        </div>
                                    )}
                                    {files && files.length > 0 && (
                                        <Box mt="md" className="flex gap-2 h-40">
                                            {files.map((file, index) => (
                                                <div key={index} style={{ textAlign: 'center' }}>
                                                    <img
                                                        src={URL.createObjectURL(file)}
                                                        alt={file.name}
                                                        // fit=""
                                                        className="border-2 rounded-lg h-40 object-cover"

                                                    />
                                                    <Text size="xs" mt={4} className="font-semibold" lineClamp={1}>
                                                        {file.name}
                                                    </Text>
                                                </div>
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                                <Box className="flex flex-col gap-3 w-1/3">
                                    <NumberInput
                                        label="Product Price"
                                        leftSection={<TbCurrencyNaira />}
                                        placeholder="4,000"
                                        leftSectionPointerEvents="none"
                                        min={100}
                                        prefix="₦"
                                        allowDecimal
                                        decimalScale={2}
                                        decimalSeparator="."
                                        thousandSeparator={','}
                                        className="font-semibold"
                                        allowNegative={false}
                                        key={addProductForm.key('price')}
                                        {...addProductForm.getInputProps('price')}
                                    />
                                    <MultiSelect
                                        label="Category"
                                        placeholder="Pick product category"
                                        data={['Men', 'Women', 'Boys', 'Girls', 'Unisex', 'Shoes', 'Under wears']}
                                        maxDropdownHeight={200}
                                        searchable
                                        comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
                                        // key={addProductForm.key('category')}
                                        {...addProductForm.getInputProps('category')}
                                    />
                                    <Box className="flex items-end gap-4">
                                        <NumberInput
                                            label="Product stock"
                                            leftSection={<TbNumber123 />}
                                            placeholder="4,000"
                                            leftSectionPointerEvents="none"
                                            min={0}
                                            max={100}
                                            allowDecimal={false}
                                            className="font-semibold"
                                            allowNegative={false}
                                            key={addProductForm.key('stock')}
                                            {...addProductForm.getInputProps('stock')}
                                        />
                                        <Switch
                                            checked={checked}
                                            onChange={(event) => {
                                                const isChecked = event.currentTarget.checked;
                                                setChecked(isChecked);
                                                addProductForm.setFieldValue("published", isChecked);
                                            }}
                                            color="teal"
                                            size="md"
                                            label="Publish"
                                            className="font-semibold"
                                            thumbIcon={
                                                checked ? (
                                                    <FaCheck size={12} color="var(--mantine-color-teal-6)" />
                                                ) : (
                                                    <GrFormClose size={12} color="var(--mantine-color-red-6)" />
                                                )
                                            }
                                        />
                                    </Box>
                                   
                                    {addProductForm.errors.published && (
                                        <div style={{ color: "red", fontSize: 13, marginTop: 5 }}>
                                            
                                            {addProductForm.errors.published}
                                        </div>
                                    )}
                                </Box>
                            </Box>
                            <Box className="flex flex-col font-sans mt-3 gap-2">
                                <h3 className="font-semibold font-sans">Product description</h3>
                                <RichTextEditor
                                    className="font-sans" editor={editor}>
                                    <RichTextEditor.Toolbar sticky stickyOffset="var(--docs-header-height)">
                                        <RichTextEditor.ControlsGroup>
                                            <RichTextEditor.Bold />
                                            <RichTextEditor.Italic />
                                            <RichTextEditor.Underline />
                                            <RichTextEditor.Strikethrough />
                                            <RichTextEditor.ClearFormatting />
                                            <RichTextEditor.Highlight />
                                            <RichTextEditor.Code />
                                        </RichTextEditor.ControlsGroup>

                                        <RichTextEditor.ControlsGroup>
                                            <RichTextEditor.H1 />
                                            <RichTextEditor.H2 />
                                            <RichTextEditor.H3 />
                                            <RichTextEditor.H4 />
                                        </RichTextEditor.ControlsGroup>

                                        <RichTextEditor.ControlsGroup>
                                            <RichTextEditor.Blockquote />
                                            <RichTextEditor.Hr />
                                            <RichTextEditor.BulletList />
                                            <RichTextEditor.OrderedList />
                                            <RichTextEditor.Subscript />
                                            <RichTextEditor.Superscript />
                                        </RichTextEditor.ControlsGroup>

                                        <RichTextEditor.ControlsGroup>
                                            <RichTextEditor.Link />
                                            <RichTextEditor.Unlink />
                                        </RichTextEditor.ControlsGroup>

                                        <RichTextEditor.ControlsGroup>
                                            <RichTextEditor.AlignLeft />
                                            <RichTextEditor.AlignCenter />
                                            <RichTextEditor.AlignJustify />
                                            <RichTextEditor.AlignRight />
                                        </RichTextEditor.ControlsGroup>

                                        <RichTextEditor.ControlsGroup>
                                            <RichTextEditor.Undo />
                                            <RichTextEditor.Redo />
                                        </RichTextEditor.ControlsGroup>
                                    </RichTextEditor.Toolbar>

                                    <RichTextEditor.Content className="font-sans" />
                                </RichTextEditor>
                                {addProductForm.errors.description && (
                                    <div style={{ color: "red", fontSize: 13, marginTop: 5 }}>
                                        {addProductForm.errors.description}

                                    </div>
                                )}
                                <Button disabled={loading} bg={'black'} size="lg" type="submit">
                                    {
                                        loading ? <Loader color="green" /> : "Add product"
                                    }
                                </Button>
                            </Box>


                        </form>
                    </Box>
                </Box>
            </Box>


        </>
    )
}

export default AddProduct
